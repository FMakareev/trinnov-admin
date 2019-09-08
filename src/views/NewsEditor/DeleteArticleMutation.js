import {gql} from "apollo-boost";
import {APOLLO_TYPES} from "../../apollo/Types";

export const DeleteArticleMutation = gql`
    mutation(
        $slug: String!
    ) {
        createArticles(slug: $slug)
        @rest(
            type: "${APOLLO_TYPES.News}",
            path: "/articles/{args.slug}/",
            method: "DELETE"
        ) {
            id
            userId
            completed
            title
        }
    }
`;
