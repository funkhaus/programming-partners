import GlobalHamburger from "~/components/global/Hamburger"
import LogoRockPaperScissors from "~/assets/svg/logo-rock-paper-scissors"

export default {
    title: "ProgrammingPartners / GlobalHamburger",
}

export const Default = () => ({
    data() {
        return {
            isOpened: false,
        }
    },
    components: { GlobalHamburger, LogoRockPaperScissors },
    template: `
        <global-hamburger :is-opened="isOpened" @menu-opened='toggleMenu'>
        <logo-rock-paper-scissors class="logo"/>
        </global-hamburger>`,
    methods: {
        toggleMenu(event) {
            this.isOpened = event // used for example
        },
    },
})

export const AlternateLogo = () => ({
    data() {
        return {
            isOpened: false,
        }
    },
    components: { GlobalHamburger },
    template: `
        <global-hamburger :is-opened="isOpened" @menu-opened='toggleMenu'>
        <logo-funkhaus class="logo"/>
        </global-hamburger>`,
    methods: {
        toggleMenu(event) {
            this.isOpened = event // used for example
        },
    },
})

export const NoLogo = () => ({
    data() {
        return {
            isOpened: false,
        }
    },
    components: { GlobalHamburger },
    template: `
        <global-hamburger :is-opened="isOpened" @menu-opened='toggleMenu'/>`,
    methods: {
        toggleMenu(event) {
            this.isOpened = event // used for example
        },
    },
})
