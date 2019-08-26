/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,

  Button,
  CardHeader,
  FormTextarea,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

import OpenGraph from "../components/OpenGraph";
import CardDetails from "../components/editor-components/CardDetails";
import ArticleHeadImage from "../components/editor-components/ArticleHeadImage";
import {Form} from "react-final-form";


const ProductCategoryEditor = () => {


  return (<Form
    onSubmit={(values) => {
      console.log(values);
    }}
    render={({
               handleSubmit,
               values
             }) => {

      return (
        <form
          onSubmit={(event) => {
            return handleSubmit(event)
          }}
        >
          <Container fluid className="main-content-container px-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
              <PageTitle
                sm="4" title="Product category editor"
                subtitle="Edit market categories"
                className="text-sm-left"
              />
              <div className="ml-auto">
                <Button outline theme="accent" size="sm" className="mr-2">
                  <i className="material-icons">save</i> Save Draft
                </Button>
                <Button theme="accent" size="sm" className="ml-auto">
                  <i className="material-icons">file_copy</i> Publish
                </Button>
              </div>
            </Row>
            <Row className="mb-4">
              <Col lg="9">
                <Row>
                  <Col md="6">
                    <ArticleHeadImage name={'head_image'}/>
                  </Col>
                  <Col md="6">
                    <ArticleHeadImage
                      name={'logo'}
                      title={'Category logotype'}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <Card small>
                      <CardHeader className="border-bottom">
                        <h6
                          className="m-0"
                        >
                          Category intro
                        </h6>
                      </CardHeader>
                      <CardBody>
                        <FormTextarea
                          style={{height: "200px"}}
                        />
                      </CardBody>
                    </Card>
                  </Col>
                </Row>

              </Col>
              <Col lg="3">
                <OpenGraph/>
                <CardDetails/>
              </Col>
            </Row>
          </Container>
        </form>
      );
    }}/>)
}

export default ProductCategoryEditor;
