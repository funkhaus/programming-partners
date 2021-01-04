<template>
    <section
        v-if="page"
        :class="classes"
    >
        <!-- Home page components will go here -->
    </section>
</template>

<script>
// Helpers
import _get from "lodash/get"

// Queries
import HOME from "~/gql/queries/Home"

export default {
    async asyncData({ $graphql, route }) {
        const data = await $graphql.request(HOME, {
            uri: route.path,
        })
        return {
            page: _get(data, "nodeByUri", {}),
        }
    },
    computed: {
        classes() {
            return ["page", "page-home"]
        },
    },
}
</script>

<style lang="scss" scoped>
.page-home {
    // Hover states
    // @media #{$has-hover} {
    // Hover styles would go here
    // }

    // Breakpoints
    // @media #{$lt-tablet} {
    // }
}
</style>
