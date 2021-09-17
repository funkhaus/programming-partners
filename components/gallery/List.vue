<template>
    <div class="list gallery-list">
        <ul class="list list-main">
            <li
                v-for="(main) in preparedList"
                class="item-main"
            >
                <ul class="list list-sub">
                    <li
                        v-for="(list) in main"
                        class="item"
                    >
                        <ul class="list">
                            <li
                                v-for="item in list.listItems"
                                :key="item.id"
                                class="item"
                                @mouseout="mouseOut()"
                                @mouseover="mouseOver(item)"
                            >
                                <h3 class="item-title">
                                    <nuxt-link
                                        :to="item.uri"
                                        class="link"
                                    >
                                        {{ item.title }}
                                    </nuxt-link>
                                </h3>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>

        <transition
            mode="out-in"
            name="fade"
        >
            <wp-image
                v-if="image"
                :key="image.id"
                :alt="image.altText"
                :caption="`Who the fuxt is ${caption}?`"
                :class="imageClasses"
                :image="image"
                mode="fullbleed"
                @error-video="videoError"
                @error-image="imageError"
                @loaded-image="imageLoaded"
                @loaded-video="videoLoaded"
            />
        </transition>
    </div>
</template>
<script>

import _dropRight from "lodash/dropRight"
import _takeRight from "lodash/takeRight"
import WpImage from '~/components/WpImage'

export default {
    name: "List",
    components: {
        WpImage,
    },
    props: {
        items: {
            type: Array,
            default: () => []
        },
    },
    data() {
        return {
            isImageLoaded: false,
            isVideoLoaded: false,
            isImageError: false,
            isVideoError: false,
            caption: '',
            image: null
        }
    },
    computed: {
        imageClasses() {
            return [
                {
                    'media-loaded': this.isImageLoaded || this.isVideoLoaded,
                    'media-has-full-error': this.isVideoError && this.isImageError && !this.isImageLoaded && !this.isVideoLoaded,
                }
            ]

        },
        preparedList() {
            let tempData = this.items
            let {right, left} = this.shapeListData(tempData, 3)
            let trimmed = this.shapeListData(left, 2)

            return [
                [
                    {
                        listItems: trimmed.left
                    },
                ],
                [
                    {
                        listItems: trimmed.right
                    },
                    {
                        listItems: right
                    }
                ]

            ]
        },
    },
    methods: {
        videoLoaded() {
            this.isVideoLoaded = true
        },
        imageLoaded() {
            this.isImageLoaded = true
        },
        videoError() {
            this.isVideoError = true
        },
        imageError() {
            this.isImageError = true
        },

        mouseOver(item) {
            this.caption = item.title
            this.image = item.featuredImage.node
        },
        mouseOut() {
            this.isVideoLoaded = false
            this.isImageLoaded = false
            this.isVideoError = false
            this.isImageError = false
            this.caption = ''
            this.image = null
        },
        shapeListData(array, offset) {
            let count = array.length
            let trimLastCount = Math.floor(count / offset)
            let rightArray = _takeRight(array, trimLastCount)
            let leftArray = _dropRight(array, trimLastCount)

            return {
                left: leftArray,
                right: rightArray
            }
        },
    }

}
</script>


<style lang="scss" scoped>

.gallery-list {
    position: relative;
    z-index: 0;

    max-width: 1280px;
    min-height: var(--unit-100vh);
    margin: 0 auto;
    padding: 0 var(--unit-gap);
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-family: var(--font-primary);

    .list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .list-main {
        position: relative;
        z-index: 20;

        max-width: 1180px;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        margin: 0 auto;

        display: flex;
        justify-content: space-between;
    }

    .item-main {
        flex: 1 1 37%;

        &:last-child {
            flex: 1 1 63%;
            display: flex;
            justify-content: space-between;

            .list-sub {
                display: flex;
                justify-content: space-between;
                flex-grow: 1;
            }
        }
    }

    .item-title {
        margin: 0;

        font-size: 24px;
    }

    .wp-image {
        position: absolute;
        z-index: 10;

        max-width: 960px;
        width: 100%;
        max-height: 540px;
        height: 100%;
        margin: auto;
        overflow: hidden;
        box-sizing: border-box;

        &.media-loaded {
            // don't hide media if video has 404 but item still has an image
            /deep/ .media {
                opacity: 1;
            }
        }

        &.media-has-full-error {
            // hide the sizer so the broken image icon isn't visible on 404 images
            /deep/ .sizer {
                visibility: hidden;
            }

            // display the caption
            /deep/ .caption {
                opacity: 1;
            }
        }
    }

    .link {
        padding: 17px 0;

        display: block;

        color: var(--color-yellow);
    }


    @media #{$has-hover} {
        .link {
            &:hover {
                color: var(--color-white);
            }
        }
        /deep/ .caption {
            position: relative;

            height: 100%;
            padding-top: 4%;

            display: block;

            background: #CD1A45;
            text-align: center;
            font-size: 40px;
            opacity: 0;

            transition: opacity .4s ease-in-out;
            transition-delay: .4s; // add slight delay so you don't see a flash of the caption on items that have image 404s but still have videos
        }
    }

    @media #{$lt-phone} {
        .image-frame {
            padding: 0 var(--unit-gap);
        }
        .list-main {
            display: block;

            text-align: center;
        }
        .item-main {
            &:last-child {
                display: block;

                .list-sub {
                    display: block;
                }
            }
        }
    }
}
</style>
