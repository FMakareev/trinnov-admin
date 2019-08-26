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
import JobArticleEditor from "../components/editor-components/JobArticleEditor";
import {Form} from "react-final-form";


const JobsEditor = () => {

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
              <PageTitle sm="4" title="Jobs editor"
                         subtitle="Add and edit job messages"
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
                <JobArticleEditor/>
              </Col>
              <Col lg="3">
                <OpenGraph/>
              </Col>
            </Row>
          </Container>
        </form>
      );
    }}/>)

}

export default JobsEditor;
