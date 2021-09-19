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

export const ListWithErrors = () => ({
    data() {
        return {
            items: [
                {
                    id: "cG9zdDo2NA==",
                    title: "Ace Norton",
                    uri: "/directors/ace-norton/",
                    featuredImage: {
                        node: {
                            sourceUrl: "404.jpg",
                            id: "cG9zdDo2NQ==",
                            altText: "",
                            caption: "",
                            acfImageMeta: {
                                videoUrl: "404.mp4",
                            },
                        },
                    },
                },
                {
                    id: "cG9zdDo3MA==",
                    title: "Michael McCourt",
                    uri: "/directors/michael-mccourt/",
                    featuredImage: {
                        node: {
                            sourceUrl:
                "https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2019-04-30-at-10.50.31-AM-copy-2560x1432.jpg",
                            srcSet:
                "https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2019-04-30-at-10.50.31-AM-copy-2560x1432.jpg 2560w, https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2019-04-30-at-10.50.31-AM-copy-300x168.jpg 300w, https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2019-04-30-at-10.50.31-AM-copy-1024x573.jpg 1024w, https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2019-04-30-at-10.50.31-AM-copy-768x430.jpg 768w, https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2019-04-30-at-10.50.31-AM-copy-1536x859.jpg 1536w, https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2019-04-30-at-10.50.31-AM-copy-2048x1146.jpg 2048w, https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2019-04-30-at-10.50.31-AM-copy-960x537.jpg 960w, https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2019-04-30-at-10.50.31-AM-copy-375x210.jpg 375w, https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2019-04-30-at-10.50.31-AM-copy-1280x716.jpg 1280w, https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2019-04-30-at-10.50.31-AM-copy-1920x1074.jpg 1920w",
                            id: "cG9zdDo3MQ==",
                            altText: "",
                            acfImageMeta: {
                                videoUrl: "404.mp4",
                            },
                        },
                    },
                },
                {
                    id: "cG9zdDo3NQ==",
                    title: "Andreas Roth",
                    uri: "/directors/andreas-roth/",
                    featuredImage: {
                        node: {
                            sourceUrl:
                "https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2019-10-21-at-11.09.45-AM-copy.jpeg",
                            srcSet:
                "https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2019-10-21-at-11.09.45-AM-copy.jpeg 1680w, https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2019-10-21-at-11.09.45-AM-copy-300x125.jpeg 300w, https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2019-10-21-at-11.09.45-AM-copy-1024x427.jpeg 1024w, https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2019-10-21-at-11.09.45-AM-copy-768x320.jpeg 768w, https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2019-10-21-at-11.09.45-AM-copy-1536x640.jpeg 1536w, https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2019-10-21-at-11.09.45-AM-copy-960x400.jpeg 960w, https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2019-10-21-at-11.09.45-AM-copy-375x156.jpeg 375w, https://mock-api.funkhaus.us/wp-content/uploads/2021/01/Screen-Shot-2019-10-21-at-11.09.45-AM-copy-1280x533.jpeg 1280w",
                            id: "cG9zdDo3Ng==",
                            altText: "",
                            acfImageMeta: {
                                videoUrl:
                  "https://player.vimeo.com/external/459138482.hd.mp4?s=23ab78a479b9db8f17d7af486c43c1b87891e625&profile_id=174",
                            },
                        },
                    },
                },
                {
                    id: "cG9zdDo2Nw==",
                    title: "Pedro Pinto",
                    uri: "/directors/pedro-pinto/",
                    featuredImage: {
                        node: {
                            sourceUrl: "404.jpg",
                            srcSet: "404.jpg",
                            id: "cG9zdDo2OA==",
                            altText: "",
                            acfImageMeta: {
                                videoUrl:
                  "https://player.vimeo.com/external/459133237.hd.mp4?s=f300cd200bcc19b117605247a7946be4b05deda0&profile_id=175",
                            },
                        },
                    },
                },
            ],
        }
    },
    components: {
        GalleryList,
        WpImage,
    },
    template: `
        <gallery-list :items="items"/>`,
})
