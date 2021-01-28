import GalleryList from "~/components/gallery/List";
import WpImage from "~/components/WpImage";
import { data as API } from "~/stories/mock-api.json";

export default {
    title: "ProgrammingPartners / GalleryList",
};

export const Default = () => ({
    data() {
        return {
            directors: API.directors.children.nodes,
            isOpened: false,
        };
    },
    components: {
        GalleryList,
        WpImage,
    },
    template: `<gallery-list :items="directors" />`,
    methods: {
        toggleMenu(event) {
            this.isOpened = event; // used for example
        },
    },
});
