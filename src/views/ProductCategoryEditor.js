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



class ProductCategoryEditor extends React.Component {
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
          <PageTitle sm="4" title="Product category editor" subtitle="Edit market categories" className="text-sm-left" />
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
          <Row><ArticleHeadImage /></Row>
          <Row >
          <Col md="6"><Card small>
              <CardHeader className="border-bottom"> <h6 className="m-0">Category intro</h6></CardHeader>
              <CardBody><FormTextarea style={{height: "200px"}}></FormTextarea></CardBody>
          </Card></Col>
          <Col md="6"><Card small>
              <CardHeader className="border-bottom"> <h6 className="m-0">Category logotype</h6></CardHeader>
              <CardBody>
              <Col>
              <img src={require("../images/content-management/logo-hor-hifi.png")} height="30px" className="mt-2 ml-auto mb-4"></img>
              <CustomFileUpload></CustomFileUpload>
              </Col>
              </CardBody>
          </Card></Col>
          </Row>
          
        </Col>
        <Col lg="3">
          <OpenGraph />
          <CardDetails />
        </Col>
      </Row>
    </Container>
    );
  }
}

export default ProductCategoryEditor;