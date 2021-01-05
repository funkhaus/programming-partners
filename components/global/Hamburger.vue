<template>
    <div
        :class="classes"
        @click="toggleMenu()"
    >
        <div class="line line-1" />
        <div class="line line-2" />
    </div>
</template>

<script>
export default {
    props: {
        isOpened: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classes() {
            return ["global-hamburger", { "is-opened": this.isOpened }]
        },
    },
    methods: {
        toggleMenu() {
            // Toggle menu state
            if (this.isOpened) {
                this.$emit("menuOpened", false)
            } else {
                this.$emit("menuOpened", true)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.global-hamburger {
    height: 22px;
    width: 30px;
    padding: 20px;
    cursor: pointer;
    position: relative;
    z-index: 10;
    transition: opacity 0.4s ease-in-out;

    .line {
        height: 2px;
        width: 30px;
        background-color: var(--color-yellow);
        position: absolute;
        left: 20px;
        transform-origin: center right;
        transition: all 0.4s ease-in-out;
        z-index: 10;
    }
    .line-1 {
        top: 25px;
    }
    .line-2 {
        bottom: 25px;
    }

    // Opened state
    &.is-opened {
        .line-1 {
            transform: rotate(-45deg) translate(1px, -7px);
        }
        .line-2 {
            transform: rotate(45deg) translate(1px, 7px);
        }
    }
}
</style>
