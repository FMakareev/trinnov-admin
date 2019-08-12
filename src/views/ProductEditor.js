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
import SpecificationsEditor from "../components/editor-components/SpecificationsEditor";
import AwardEditor from "../components/editor-components/AwardEditor";
import PressEditor from "../components/editor-components/PressEditor";


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
            <CardHeader className="border-bottom mb-4"><h6 className="m-0">Main image gallery</h6></CardHeader>
            <CardBody>
              <Row>
              <Col md="3"><div className="border rounded p-2"><img width="100%" height="auto" src={require("../images/content-management/10.jpeg")} className="pb-2"></img></div></Col>
              <Col md="3"><div className="border rounded p-2"><img width="100%" height="auto" src={require("../images/content-management/9.jpeg")} className="pb-2"></img></div></Col>
              <Col md="3" ><div className=""><i className="material-icons w-100 text-center" style={{fontSize: 124}}>add_photo_alternate</i> <CustomFileUpload /></div></Col>
              </Row>
            </CardBody>
          </Card>
          <ProductOverviewEditor />
          <SpecificationsEditor />
          <AwardEditor />
          <PressEditor />
          <Card smallclassName="mb-4">
            <CardHeader className="border-bottom">
                <h6 className="m-0">Downloads</h6>
            </CardHeader>
            <CardBody>
            
            <Row noGutters className="mb-4"><FormInput size="lg" value="Drivers"></FormInput></Row>
            <Col className="border-bottom mb-4">
            <Row >
              <Col md="3">
                <strong className="text-muted d-block mb-2">
                  File type
                </strong>
                <FormSelect className="mr-2 rounded">
                  <option>PDF</option>
                  <option>Archive</option>
                  <option>Windows</option>
                  <option>MacOS</option>
                  <option>Linux</option>
                  <option>Image</option>
                  <option>CAD</option>
              </FormSelect>
              </Col>
              <Col md="4">
                <strong className="text-muted d-block mb-2">
                  File
                </strong>
                <CustomFileUpload />
              </Col>
              <Col md="4">
                <strong className="text-muted d-block mb-2">
                  File name
                </strong>
                <FormInput value="The file name" />
              </Col>
              <Col md="1">
                <strong className="text-muted d-block mb-2">
                  Delete 
                </strong>
                <Button size="sm" theme="danger">X</Button>
              </Col>
            </Row>
            <Row >
              <Col md="3">
                <strong className="text-muted d-block mb-2">
                  File type
                </strong>
                <FormSelect className="mr-2 rounded">
                  <option>PDF</option>
                  <option>Archive</option>
                  <option>Windows</option>
                  <option>MacOS</option>
                  <option>Linux</option>
                  <option>Image</option>
                  <option>CAD</option>
              </FormSelect>
              </Col>
              <Col md="4">
                <strong className="text-muted d-block mb-2">
                  File
                </strong>
                <CustomFileUpload />
              </Col>
              <Col md="4">
                <strong className="text-muted d-block mb-2">
                  File name
                </strong>
                <FormInput value="The file name" />
              </Col>
              <Col md="1">
                <strong className="text-muted d-block mb-2">
                  Delete 
                </strong>
                <Button size="sm" theme="danger">X</Button>
              </Col>
            </Row>
            <Row><Button className="mb-4 btn-block"><i className="material-icons">add_box</i>  Add file</Button></Row>
            </Col>
            
            <Row noGutters className="mb-4"><FormInput size="lg" value="Manuals"></FormInput></Row>
            <Col className="border-bottom mb-4">
            <Row >
              <Col md="3">
                <strong className="text-muted d-block mb-2">
                  File type
                </strong>
                <FormSelect className="mr-2 rounded">
                  <option>PDF</option>
                  <option>Archive</option>
                  <option>Windows</option>
                  <option>MacOS</option>
                  <option>Linux</option>
                  <option>Image</option>
                  <option>CAD</option>
              </FormSelect>
              </Col>
              <Col md="4">
                <strong className="text-muted d-block mb-2">
                  File
                </strong>
                <CustomFileUpload />
              </Col>
              <Col md="4">
                <strong className="text-muted d-block mb-2">
                  File name
                </strong>
                <FormInput value="The file name" />
              </Col>
              <Col md="1">
                <strong className="text-muted d-block mb-2">
                  Delete 
                </strong>
                <Button size="sm" theme="danger">X</Button>
              </Col>
            </Row>
            <Row><Button className="mb-4 btn-block"><i className="material-icons">add_box</i>  Add file</Button></Row>
            </Col>
            <Row><Button outline className="mb-4 btn-block"><i className="material-icons">create_new_folder</i>  Add folder</Button></Row>
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