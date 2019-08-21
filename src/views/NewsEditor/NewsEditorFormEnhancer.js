import React from 'react';
import {gql} from 'apollo-boost'
import {APOLLO_TYPES} from "../../apollo/Types";
import {graphql} from '@apollo/react-hoc';
import {compose} from "recompose";
import {UpdateArticleMutation} from "./UpdateArticleMutation";
import {CreateArticleMutation} from "./CreateArticleMutation";

import {FORM_ERROR} from "final-form";


const GetNewsQuery = gql`
    query($slug: String!){
        news(slug: $slug)
        @rest(
            type: "${APOLLO_TYPES.News}",
            path: "/articles/{args.slug}/",
        ){
            id
            title
            slug
            content
            head_image
            thumbnail
            og_thumbnail
            og_description
            card_description
            is_featured
            thumbnail_featured
            with_video
        }
    }
`;

const QueryCompose = compose(
  graphql(GetNewsQuery, {
    skip: ({match}) => !(match.params && match.params.slug),
    options: ({match}) => {
      console.log('GetNewsQuery: ', match);
      return ({
        variables: {
          slug: match.params && match.params.slug,
        },
      })
    },
  }),
  graphql(CreateArticleMutation, {
    name: 'CreateArticles'
  }),
  graphql(UpdateArticleMutation, {
    name: 'UpdateArticles'
  }),
)


const NewsEditorFormEnhancer = (WrapperComponent) =>
  QueryCompose(class extends React.Component {

    state = {
      EditorRefInstance: null,
    };

    transformData = (values) => {
      const newValues = Object.assign({}, values);
      if (typeof newValues.head_image !== 'string') {
        newValues.head_image = newValues.head_image && newValues.head_image.file;
      }

      if (typeof newValues.og_thumbnail !== 'string') {
        newValues.og_thumbnail = newValues.og_thumbnail && newValues.og_thumbnail.file;
      }

      if (typeof newValues.thumbnail !== 'string') {
        newValues.thumbnail = newValues.thumbnail && newValues.thumbnail.file;
      }

      if (typeof newValues.thumbnail_featured !== 'string') {
        newValues.thumbnail_featured = newValues.thumbnail_featured && newValues.thumbnail_featured.file;
      }

      if (newValues.content) {
        newValues.content = JSON.stringify(newValues.content);
      }
      if (newValues.is_featured === null) {
        newValues.is_featured = false;
      }
      if (newValues.with_video === null) {
        newValues.with_video = false;
      }
      return newValues;
    };

    onPublish = async (values) => {
      console.log('onPublish: ', values);
      if (values.id) {
        const result = await this.props.UpdateArticles({
          variables: {
            ...this.transformData(values),
          }
        })
          .catch((error) => {
            console.log(error);

            return JSON.parse(JSON.stringify(error));
          });
        const errors = {};
        if (result.networkError) {
          Object.entries(result.networkError.result).map(([key, value]) => {
            errors[key] = value[0];
          });
          console.log(errors);
          return {
            [FORM_ERROR]: result.message,
            ...errors,
          }
        }

      } else {
        const result = await this.props.CreateArticles({
          variables: {
            ...this.transformData(values),
          }
        }).catch((error) => {
          console.log(error);
          return JSON.parse(JSON.stringify(error));
        });
        console.log('onPublish create: ', result);
        const errors = {};
        if (result.networkError) {
          Object.entries(result.networkError.result).map(([key, value]) => {
            errors[key] = value[0];
          });

          console.log(errors);
          return {
            [FORM_ERROR]: result.message,
            ...errors,
          }
        }

        this.props.history.push(`/news-editor/${values.slug}`)
      }

    };

    onDraft = (values) => {
      console.log('onDraft: ', values);
      this.transformData(values);
    };

    render() {
      const {data, match} = this.props;

      return <WrapperComponent
        {...this.props}
        onPublish={this.onPublish}
        onDraft={this.onDraft}
        loading={data ? data.loading : !!(match.params && match.params.slug)}
        EditorRefInstance={{
          EditorRefInstance: this.state.EditorRefInstance,
          addEditorRefInstance: (EditorRefInstance) => {
            this.setState({
              EditorRefInstance
            })
          }
        }}
        initialValues={{
          ...(data && data.news ? data.news : {
            is_featured: false,
            with_video: false,
          }),
        }}
      />
    }
  });

export default NewsEditorFormEnhancer;
