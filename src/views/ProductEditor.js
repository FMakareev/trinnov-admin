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
  FormCheckbox,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormSelect
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

import ProductOverviewEditor from "../components/editor-components/ProductOverviewEditor";



class ProductEditor extends React.Component {
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
          <PageTitle sm="4" title="Product editor" subtitle="Drag and drop interface" className="text-sm-left" />
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
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
                <h6 className="m-0">Product header</h6>
            </CardHeader>
            <CardBody>
            <FormInput size="lg" className="mb-3" placeholder="Your Product Title" />
            <FormInput placeholder="Subtitle" className="mb-4"></FormInput> 
              <Row>
                <Col md="12">
                    <Row >
                    <Col md="6"><FormInput placeholder="Date" className="mb-2"></FormInput> </Col>
                    <Col md="6"><FormInput placeholder="Slug" className="mb-2"></FormInput> </Col>
                    </Row>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Card small className="mb-4">
            <CardHeader className="border-bottom"><h6 className="m-0">Main image gallery</h6></CardHeader>
            <CardBody>
              <Row>
              <Col md="3"><div className="border rounded p-2"><img width="100%" height="auto" src={require("../images/content-management/10.jpeg")} className="pb-2"></img></div></Col>
              <Col md="3"><div className="border rounded p-2"><img width="100%" height="auto" src={require("../images/content-management/9.jpeg")} className="pb-2"></img></div></Col>
              <Col md="3" ><div className=""><i className="material-icons w-100 text-center" style={{fontSize: 124}}>add_photo_alternate</i> <CustomFileUpload /></div></Col>
              </Row>
            </CardBody>
          </Card>
          <ProductOverviewEditor />
          <Card small>
            <CardHeader className="border-bottom">
              <h6 className="m-0">Specifications</h6>
            </CardHeader>
            <CardBody>
              <Row noGutters><h6>Text block</h6></Row>
              <Row className="border-bottom py-4 mb-4">
                <Col md="3"><FormInput placeholder="Analog I/O"></FormInput></Col>
                <Col><ReactQuill placeholder="Put data here"></ReactQuill></Col>
              </Row>
              <Row noGutters><h6>Gallery block</h6></Row>
              <Row className="border-bottom py-4">
                <Col md="3"><FormInput placeholder="Immersive decocing"></FormInput></Col>
                <Col md="9" className="mb-4"><ReactQuill placeholder="Put data here"></ReactQuill></Col>
                <Col md="3"><div className="border rounded p-2"><img width="100%" height="auto" src={require("../images/content-management/10.jpeg")} className="pb-2"></img></div></Col>
              <Col md="3"><div className="border rounded p-2"><img width="100%" height="auto" src={require("../images/content-management/9.jpeg")} className="pb-2"></img></div></Col>
              <Col md="3" ><div className=""><i className="material-icons w-100 text-center" style={{fontSize: 124}}>add_photo_alternate</i> <CustomFileUpload /></div></Col>
              </Row>
              <Row noGutters><h6>Image left block</h6></Row>
              <Row className="border-bottom py-4 mb-4">
                <Col md="3"><FormInput placeholder="Roon Ready"></FormInput></Col>
                <Col md="3"><Row noGutters><img width="100%" height="auto" src={require("../images/content-management/10.jpeg")} className="pb-2"></img> </Row>
                    <Row noGutters><CustomFileUpload /></Row></Col>
                <Col><ReactQuill placeholder="Put data here"></ReactQuill></Col>
              </Row>   
              <Row noGutters><h6>Image right block</h6></Row>
              <Row className="border-bottom py-4 mb-4">
                <Col md="3"><FormInput placeholder="Roon Ready"></FormInput></Col>
                <Col><ReactQuill placeholder="Put data here"></ReactQuill></Col>
                <Col md="3"><Row noGutters><img width="100%" height="auto" src={require("../images/content-management/10.jpeg")} className="pb-2"></img> </Row>
                    <Row noGutters><CustomFileUpload /></Row></Col>
              </Row>
              <Row><Col md="12">
              <InputGroup className="mb-3">
                <FormSelect className="mr-2 rounded">
                  <option>Choose</option>
                  <option>Text block</option>
                  <option>Gallery block</option>
                  <option>Image left block</option>
                  <option>Image right block</option>
                </FormSelect>
                <Button>Add specifications block</Button>
              </InputGroup>
              </Col>
              </Row>     
            </CardBody>
          </Card>
        </Col>
        <Col lg="3">
          <OpenGraph />
          <CardDetails />
          <SidebarCategories />
        </Col>
      </Row>
    </Container>
    );
  }
}

export default ProductEditor;