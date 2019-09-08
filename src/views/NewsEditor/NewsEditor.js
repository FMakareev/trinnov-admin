/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {Field, Form} from 'react-final-form'
import createDecorator from 'final-form-focus'

import {
  Container,
  Row,
  Col,
  Button,
} from "shards-react";
import PageTitle from "../../components/common/PageTitle";
import OpenGraph from "../../components/OpenGraph";
import CardDetails from "../../components/editor-components/CardDetails";
import CardFeatured from "../../components/editor-components/CardFeatured";
import SidebarCategories from "../../components/add-new-post/SidebarCategories";
import ArticleHeadImage
  from "../../components/editor-components/ArticleHeadImage";

import ArticleEditor from "../../components/editor-components/ArticleEditor";
import NewsEditorFormEnhancer from "./NewsEditorFormEnhancer";
import PublishButton from "../../components/PublishButton/PublishButton";


const focusOnError = createDecorator()

const NewsValidator = async (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required'
  }
  if (!values.slug) {
    errors.slug = 'Required'
  }

  if (!values.head_image) {
    errors.head_image = 'Required'
  }
  if (!values.thumbnail) {
    errors.thumbnail = 'Required'
  }
  if (!values.thumbnail_featured) {
    errors.thumbnail_featured = 'Required'
  }
  if (!values.og_description) {
    errors.og_description = 'Required'
  }
  if (!values.og_thumbnail) {
    errors.og_thumbnail = 'Required'
  }
  if (!values.card_description) {
    errors.card_description = 'Required'
  }

  return errors;
};


const NewsEditor = ({onPublish, onDelete, loading, initialValues, EditorRefInstance}) => {
  if (loading) {
    return (<div>
      Loading ...
    </div>)
  }
  /**
   * is_published = false - Publish
   * is_published = true - Unpublish + update
   *
   * */
  return (<Form
    onSubmit={async (values) => {
      let savedData = {};
      if (EditorRefInstance.EditorRefInstance) {
        savedData = await EditorRefInstance.EditorRefInstance.save();
        if (savedData.blocks && !savedData.blocks.length) {
          return {
            content: 'Required'
          }
        }
      } else {
        return {
          content: 'Editor not initializing'
        }
      }
      return onPublish({
        ...values,
        content: savedData,
      })
    }}
    decorators={[focusOnError]}
    initialValues={{
      is_published: false,
      ...initialValues,
    }}

    validate={NewsValidator}
    render={({handleSubmit, values}) => {

      return (
        <form onSubmit={(event) => {
          return handleSubmit(event)
        }}>

          <Container fluid className="main-content-container px-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
              <PageTitle
                sm="4" title="News editor"
                subtitle="Drag and drop interface"
                className="text-sm-left"
              />
              <div className="ml-auto">

                {
                  values && !values.id &&
                  <Button
                    onClick={() => {
                      void handleSubmit({is_published: false, values})
                    }}
                    type={'button'}
                    outline
                    theme="accent"
                    size="sm"
                    className="mr-2">
                    <i className="material-icons">save</i> Save Draft
                  </Button>
                }
                {
                  values && values.id &&
                  <Button
                    onClick={() => {
                      void handleSubmit(values)
                    }}
                    outline theme="accent" size="sm" className="mr-2">
                    <i className="material-icons">save</i> Update
                  </Button>
                }
                <Field
                  className="mr-2"
                  name={'is_published'}
                >
                  {
                    (props) => (<PublishButton
                      onClick={(is_published) => {
                        void handleSubmit({...values, is_published})
                      }} {...props}/>)
                  }
                </Field>
                {
                  values && values.id &&
                  <Button
                    onClick={() => {
                      if(window.confirm('are you sure you want to delete this article?')){
                        onDelete(values);
                      }
                    }}
                    type={'button'}
                    outline
                    theme="danger"
                    size="sm"
                   >
                    <i className="material-icons">delete</i> Delete
                  </Button>
                }
              </div>
            </Row>
            <Row className="mb-4">
              <Col lg="9">
                <ArticleHeadImage/>
                <ArticleEditor
                  EditorRefInstance={EditorRefInstance}
                />

              </Col>
              <Col lg="3">
                <OpenGraph/>
                <CardDetails/>
                <CardFeatured/>
                <SidebarCategories/>
              </Col>
            </Row>
          </Container>
        </form>
      )
    }}
  />)
}

const WithHOC = NewsEditorFormEnhancer(NewsEditor);

export default (props) => (<WithHOC {...props}/>);
