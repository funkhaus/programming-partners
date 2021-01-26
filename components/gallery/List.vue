<template lang="html">
    <div class="gallery-list">
        <div class="gallery-header">
            <slot />
        </div>
        <div class="directors-container">
            <div class="directors">
                <div
                    v-for="(director, i) in items"
                    :key="i"
                    class="director"
                    @mouseenter="mouseEnter(director.featuredImage.node)"
                    @mouseleave="mouseLeave()"
                    >
                    <nuxt-link :to="director.uri">
                        {{director.title}}
                    </nuxt-link>
                </div>
                 <wp-image mode="fullbleed" :src="hoverImg" :srcSet="hoverImgSet" :class="visible"/>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            hoverImg: null,
            hoverImgSet: null,
            visible: 'hidden'
        }
    },
    props: {
        items: {
        // The list of talent. Can use mock API `directors` for these. Use the `featuredImage` for hover.
        type: Array,
        default: () => []
        }
    },
    methods: {
        mouseEnter(image){
            console.log("Enter")
            console.log(image)
            this.hoverImg = image.sourceUrl
            this.hoverImgSet = image.srcSet
            this.visible = 'show'
        },
        mouseLeave(){
            console.log("leave")
            this.hoverImg = null
            this.hoverImgSet = null
            this.visible = 'hidden'
        }
    }
}
</script>

<style lang="scss" scoped>
.gallery-list {
    padding: 0 var(--unit-gap);
    max-width: 1280px;
    margin: auto;
    min-height: var(--unit-100vh);
    z-index: 0;

    .gallery-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        > div,
        > a{
            width: auto;
        }
        .global-hamburger{
            align-self:flex-end;
        }
    }
    .directors-container{
        display: flex;
        align-items: center;
        min-height:calc(var(--unit-100vh) - 60px);
        z-index: 10;
        .directors {
            width: 100%;
            display: grid;
            grid-template-columns: auto auto 25%;
            grid-column-gap: var(--unit-gap);
            grid-row-gap: var(--unit-gap);
            
            .director{
                position: relative;
                z-index: 20;
                a {
                    color: var(--color-yellow);
                }
                a:hover {
                    color: var(--color-white);
                }
            }
            
            .wp-image {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 80% !important;
                height: 80vh;
                z-index: 10;
            }
            .hidden{
                opacity: 0;
            }
            .show{
                opacity: 1;
            }
        }
        // Breakpoints
        @media #{$lt-phone} {
            .directors {
                display: grid;
                grid-template-columns: 100%;
            }
        }

    }
        

}
</style>
