/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from "react";
import {
  Container,
  Row,
  Button
} from "shards-react";
import {useQuery} from "@apollo/react-hooks";
import {gql} from "apollo-boost";

import PageTitle from "../../components/common/PageTitle";
import {Link} from 'react-router-dom';
import {APOLLO_TYPES} from "../../apollo/Types";
import NewsList from "./NewsList";
import Pagination from "../../components/Pagination/Pagination";
import {usePagination} from "../../utils/usePagination";


const NewsQuery = gql`
    query {
        newsList @rest(type: "${APOLLO_TYPES.News}", path: "/articles/"){
            id
            card_description
            created_at
            is_featured
            slug
            tags {
                tag_name
            }
            thumbnail
            thumbnail_featured
            title
            with_video
            __count
            __next
            __previous
            __typename
        }
    }
`;



const News = () => {
  const [state, setOffset] = usePagination();
  const {loading, data, error} = useQuery(NewsQuery);

  if (loading) return <p>Loading ...</p>;
  if (!data || error) {
    return 'Error';
  }
  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="News Posts"
          subtitle="List of news posts to edit"
          className="text-sm-left"
        />
        <div className="ml-auto">
          <Link to={'/news-editor'}>
            <Button
              className="ml-sm-auto mb-2 "
              theme="primary"
            >
              Add article +
            </Button>
          </Link>
        </div>
      </Row>

      <Row>
        <NewsList
          data={Array.isArray(data.newsList) && data.newsList.slice(state.offset, state.offset + state.perPage)}
        />
      </Row>

      <Row>
        <div className="col-sm-12">
          <Pagination
            data={data.newsList}
            onPageChange={(offset) => {
              setOffset(offset)
            }}
            perPage={state.perPage}
          />
        </div>
      </Row>
    </Container>
  );
}

export default News;
