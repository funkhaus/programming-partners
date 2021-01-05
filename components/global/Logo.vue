<template lang="html">
    <nuxt-link
        to="/"
        class="global-logo"
    >
        <svg-logo-funkhaus class="svg" />
    </nuxt-link>
</template>

<script>
import SvgLogoFunkhaus from "~/assets/svg/logo-funkhaus"

export default {
    components: {
        SvgLogoFunkhaus,
    },
}
</script>

<style lang="scss" scoped>
.global-logo {
    .svg {
        height: 20px;
        width: auto;
        transition: height 0.4s ease-in-out;
    }
    path {
        fill: var(--color-yellow);
    }

    // Breakpoints
    @media #{$lt-phone} {
        .svg {
            height: 15px;
        }
    }
}
</style>
