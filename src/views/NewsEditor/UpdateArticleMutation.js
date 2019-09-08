import {gql} from "apollo-boost";
import {APOLLO_TYPES} from "../../apollo/Types";

export const UpdateArticleMutation = gql`
    mutation(
        $id: String,
        $title: String,
        $slug: String,
        $content: String,
        $head_image: String,
        $thumbnail: String,
        $og_thumbnail: String,
        $og_description: String,
        $card_description: String,
        $is_featured: String,
        $thumbnail_featured: String,
        $with_video: String,
        $method: String,
    ) {
        createArticles(input: {
            id: $id
            title: $title
            slug: $slug
            content: $content
            head_image: $head_image
            thumbnail: $thumbnail
            og_thumbnail: $og_thumbnail
            og_description: $og_description
            card_description: $card_description
            is_featured: $is_featured
            thumbnail_featured: $thumbnail_featured
            with_video: $with_video
        },slug: $slug)
        @rest(
            type: "${APOLLO_TYPES.News}",
            path: "/articles/{args.slug}/",
            method: $method
            bodySerializer: "formData"
        ) {
            id
            userId
            completed
            title
        }
    }
`;
