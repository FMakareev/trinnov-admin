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

import TrainingArticleEditor from "../components/editor-components/TrainingArticleEditor";



class TeamMembersEditor extends React.Component {
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
          <PageTitle sm="4" title="Team members editor" subtitle="Add info about the team" className="text-sm-left" />
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
        <Col lg="12">
            <Card small >
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Add the member</h6>
                    </CardHeader>
                <CardBody>
                <FormInput size="lg" className="mb-4" placeholder="Team member name" />
                <FormInput placeholder="Date posted" className="mb-4"></FormInput> 
                <Row>
                <Col md="3">
                    <strong className="text-muted d-block mb-2">
                        Upload the photo
                    </strong>
                    <img width="100%" height="auto" src={require("../images/content-management/team-1.png")} className="pb-2"></img>
                    <CustomFileUpload />
                </Col>
                <Col md="9"><strong className="text-muted d-block mb-2">
                  Text about the team member
                </strong><FormTextarea style={{height: '300px'}}></FormTextarea></Col>
                </Row>
                </CardBody>
            </Card>
        </Col>
      </Row>
    </Container>
    );
  }
}

export default TeamMembersEditor;