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

import ArticleEditor from "../components/editor-components/ArticleEditor";



class UsersEditor extends React.Component {
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
          <PageTitle sm="4" title="User editor" subtitle="Add and edit users" className="text-sm-left" />
          <div className="ml-auto">
          <Button theme="accent" size="sm" className="ml-auto">
            <i className="material-icons">person_add</i> Save user
          </Button>
          </div>
      </Row>
      <Row>
          <Col md="12">
              <Card small>
                  <CardHeader className="border-bottom">
                  <h6 className="m-0">User Card</h6>
                  </CardHeader>
                  <CardBody>
                      <Row>
                          <Col md="2">
                            <strong className="text-muted d-block mb-2">
                            User avatar 
                            </strong>
                            <img width="100%" height="auto" src={require("../images/content-management/team-1.png")} className="pb-2"></img>
                            <CustomFileUpload />
                          </Col>
                          <Col md="6">
                            <strong className="text-muted d-block mb-2">
                            Username 
                            </strong>
                            <FormInput size="lg" className="mb-4" placeholder="User Name" />
                            <strong className="text-muted d-block mb-2">
                            User Password
                            </strong>
                            <FormInput size="lg" 
                            type="password"
                            placeholder="Password"
                            value="myCoolPassword"
                            onChange={() => {}}
                            className="mb-4"
                            />
                            <strong className="text-muted d-block mb-2">
                            User Email
                            </strong>
                            <FormInput size="lg" className="mb-4" placeholder="User email" />
                            <FormSelect size="lg" className="mb-4" >
                                <option>Moderator</option>
                                <option>Admin</option>
                            </FormSelect>
                          </Col>
                          <Col md="4">
                            <strong className="text-muted d-block mb-2">
                            First name
                            </strong>
                            <FormInput className="mb-4" placeholder="First name" />
                            <strong className="text-muted d-block mb-2">
                            Second name
                            </strong>
                            <FormInput className="mb-4" placeholder="Second name" />
                            <strong className="text-muted d-block mb-2">
                            About User
                            </strong>
                              <FormTextarea style={{height: '150px'}}></FormTextarea>
                          </Col>
                      </Row>
                  </CardBody>
              </Card>
          </Col>
      </Row>
    </Container>
    );
  }
}

export default UsersEditor;