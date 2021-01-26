import GalleryList from "~/components/gallery/List"
import GlobalLogo from "~/components/global/Logo"
import GlobalHamburger from "~/components/global/Hamburger"
import LogoRockPaperScissors from "~/assets/svg/logo-rock-paper-scissors"
import WpImage from "~/components/WpImage"
import { data as API } from "~/stories/mock-api.json"

export default {
    title: "ProgrammingPartners / GalleryList",
}

export const Default = () => ({
    data() {
        return {
            directors: API.directors.children.nodes,
            isOpened: false,
        }
    },
    components: { GalleryList, GlobalLogo, GlobalHamburger, LogoRockPaperScissors, WpImage },
    template: `<gallery-list :items="directors"><global-logo /><div>Editors</div><global-hamburger :is-opened="isOpened" @menu-opened='toggleMenu'><logo-rock-paper-scissors class="logo" /></global-hamburger></gallery-list>`,
    methods: {
        toggleMenu(event) {
            this.isOpened = event // used for example
        },
    },
})
