<template>
    <div class="gallery-list">
        <nav class="list-main">
            <ul
                v-for="(main) in preparedList"
                class="list"
            >
                <li
                    v-for="(item) in main.listItems"
                    :key="item.id"
                    class="item"
                >
                    <h3
                        class="item-title"
                        @mouseout="mouseOut()"
                        @mouseover="mouseOver(item)"
                    >
                        <nuxt-link
                            :to="item.uri"
                            class="link"
                        >
                            {{ item.title }}
                        </nuxt-link>
                    </h3>
                </li>
            </ul>
        </nav>

        <transition
            mode="out-in"
            name="fade"
        >
            <wp-image
                v-if="image"
                :key="image.id"
                :alt="image.altText"
                :caption="caption"
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

export default {
    name: "List",
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
                    'has-loaded-media': this.isImageLoaded || this.isVideoLoaded,
                    'has-full-media-error': this.isVideoError && this.isImageError && !this.isImageLoaded && !this.isVideoLoaded,
                }
            ]

        },
        preparedList() {
            let tempData = this.items
            let {right, left} = this.shapeListData(tempData, 3)
            let trimmed = this.shapeListData(left, 2)

            return [
                {
                    listItems: trimmed.left
                },
                {
                    listItems: trimmed.right
                },
                {
                    listItems: right
                }
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
            this.caption = item.featuredImage.node.caption !== null ? item.featuredImage.node.caption : `Who the fuxt is ${item.title}?`
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
// import font at the component level because it doesn't appear to be loaded globally
@font-face {
    font-family: 'RM Neue';
    src: url('../../assets/fonts/RMNeue-Regular.woff2') format('woff2'),
    url('../../assets/fonts/RMNeue-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

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


    .item-title {
        display: inline-block;

        margin: 0;
    }

    .link {
        padding: 17px 0;

        display: block;

        font-size: 24px;
        color: var(--color-yellow);
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

        &.has-loaded-media {
            // don't hide media if video has 404 but item still has an image
            /deep/ .media {
                opacity: 1;
            }
        }

        &.has-full-media-error {
            // set overflow to visible in case the item name is long
            overflow: visible;
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

    /deep/ .caption {
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;

        background: #212121;
        text-align: right;
        font-size: 8vw;
        line-height: 1;
        text-transform: uppercase;
        color: #FFFFFFFF;
        opacity: 0;

        transition: opacity .4s ease-in-out;
        transition-delay: .4s; // add slight delay so you don't see a flash of the caption on items that have image 404s but still have videos
    }


    @media #{$has-hover} {
        .link {
            &:hover {
                color: var(--color-white);
            }
        }
    }

    @media #{$lt-phone} {
        .list-main {
            display: block;

            text-align: center;
        }
        .item-main {
            &:last-child {
                display: block;
            }
        }
        /deep/ .caption {
            font-size: 20vw;
        }
    }
}
</style>
