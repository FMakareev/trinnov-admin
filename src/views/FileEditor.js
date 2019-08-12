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


class FileEditor extends React.Component {
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
    <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="%Product_name% files" subtitle="Add and delete product files" className="text-sm-left" />
      </Row>
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
    </Container>
    );
  }
}

export default FileEditor;