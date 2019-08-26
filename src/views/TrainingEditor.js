/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import OpenGraph from "../components/OpenGraph";
import CardDetails from "../components/editor-components/CardDetails";
import SidebarCategories from "../components/add-new-post/SidebarCategories";

import TrainingArticleEditor
  from "../components/editor-components/TrainingArticleEditor";
import {Form} from "react-final-form";


const TrainingEditor = () => {


  return (<Form
    onSubmit={(values) => {
      console.log(values);
    }}
    render={({
               handleSubmit,
               values
             }) => {
      return (
        <form onSubmit={handleSubmit}>
          <Container fluid className="main-content-container px-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
              <PageTitle sm="4" title="Trainings editor"
                         subtitle="Drag and drop interface"
                         className="text-sm-left"/>
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
                <TrainingArticleEditor/>
              </Col>
              <Col lg="3">
                <OpenGraph/>
                <CardDetails/>
                <SidebarCategories/>
              </Col>
            </Row>
          </Container>
        </form>
      );
    }}/>)


}

export default TrainingEditor;
