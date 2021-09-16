import GalleryList from "~/components/gallery/List"

export default {
    title: "ProgrammingPartners / GalleryList",
}

export const Default = () => ({
    components: {
        GalleryList,
    },
    template: `
        <gallery-list/>`,
})
