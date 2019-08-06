/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button,
  ButtonGroup,
  ListGroup,
  ListGroupItem,
  CardHeader,
  Form,
  FormInput,
  FormTextarea,
  FormCheckbox
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Helmet from "react-helmet"; 
import CustomFileUpload from "../components/components-overview/CustomFileUpload";
import ReactQuill from "react-quill";
import {$, window} from "jquery";
import OpenGraph from "../components/OpenGraph";
import CardDetails from "../components/editor-components/CardDetails";
import CardFeatured from "../components/editor-components/CardFeatured";
import SidebarCategories from "../components/add-new-post/SidebarCategories";
import ArticleHeadImage from "../components/editor-components/ArticleHeadImage";

import ArticleEditor from "../components/editor-components/ArticleEditor";



class NewsEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        
      };
  }

  render() {
    const {
       
    } = this.state;

    return (
    <Container fluid className="main-content-container px-4"> 
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="News editor" subtitle="Drag and drop interface" className="text-sm-left" />
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
          <ArticleHeadImage />
          <ArticleEditor />
        </Col>
        <Col lg="3">
          <OpenGraph />
          <CardDetails />
          <CardFeatured />
          <SidebarCategories />
        </Col>
      </Row>
    </Container>
    );
  }
}

export default NewsEditor;