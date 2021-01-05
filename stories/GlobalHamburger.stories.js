import GlobalHamburger from "~/components/global/Hamburger"

export default {
    title: "ProgrammingPartners / GlobalHamburger",
}

export const Default = () => ({
    data() {
        return {
            isOpened: false,
        }
    },
    components: { GlobalHamburger },
    template: `<global-hamburger :is-opened="isOpened" @menuOpened='toggleMenu'/>`,
    methods: {
        toggleMenu(event) {
            this.isOpened = event // used for example
        },
    },
})
