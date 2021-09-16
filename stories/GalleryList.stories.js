import GalleryList from "~/components/gallery/List"
import WpImage from "~/components/WpImage"
import { data as API_IMAGE_404 } from "~/stories/mock-api-error.json"
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

export const Image404 = () => ({
    data() {
        return {
            items: API_IMAGE_404.directors.children.nodes,
        }
    },
    components: {
        GalleryList,
        WpImage,
    },
    template: `
        <gallery-list :items="items"/>`,
})
