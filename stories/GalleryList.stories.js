import GalleryList from "~/components/gallery/List"
import WpImage from "~/components/WpImage"
import { data as API } from "~/stories/mock-api.json"

export default {
    title: "ProgrammingPartners / GalleryList",
}

export const Default = () => ({
    data() {
        return {
            items: API.directors.children.nodes,
        }
    },
    components: {
        GalleryList,
        WpImage,
    },
    template: `
        <gallery-list :items="items"/>`,
})
