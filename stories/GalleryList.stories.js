import GalleryList from "~/components/gallery/List"
import { data as API } from "~/stories/mock-api.json"

export default {
    title: "ProgrammingPartners / GalleryList",
}

export const Default = () => ({
    components: {
        GalleryList,
    },
    data() {
        return {
            items: API.directors.children.nodes,
        }
    },
    template: `
        <gallery-list/>`,
})
