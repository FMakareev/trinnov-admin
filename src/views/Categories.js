/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  ListGroup,
  ListGroupItem,
  FormCheckbox,
  InputGroup,
  FormInput,
  InputGroupAddon,
  Badge,
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import { Link } from "react-router-dom";
import SidebarCategories from "../components/add-new-post/SidebarCategories";
 
class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
      PostsListOne: [
        {
          backgroundImage: require("../images/content-management/team-1.png"),
          name: "Temamember Name",
          about: "The Brief text about the member",
          author: "Anna Kunis",
          authorAvatar: require("../images/avatars/1.jpg"),
          date: "28 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/team-1.png"),
          name: "Temamember Name",
          about: "The Brief text about the member",
          author: "Anna Kunis",
          authorAvatar: require("../images/avatars/1.jpg"),
          date: "28 February 2019"
        }
      ]
    };
  }

  render() {
    const {
      PostsListOne,
      
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Categories" subtitle="Add and delete News, Files and Trainings categories" className="text-sm-left" />
        </Row>
        <Row noGutters>
        <Col md="12">
            <Card small className="mb-3">
                <CardHeader className="border-bottom">
                <h6 className="m-0">Categories</h6>
                </CardHeader>
                <CardBody>

                <Col md="12">
                    <Row>
                        <Col md="10"><FormInput small value="HiFi" className="mb-2"></FormInput></Col>
                        <Col md="2"><Button className="float-right" size="sm" theme="danger">Delete</Button></Col>
                    </Row>
                    <Row>
                        <Col md="10"><FormInput small value="Cinema" className="mb-2"></FormInput></Col>
                        <Col md="2"><Button className="float-right" size="sm" theme="danger">Delete</Button></Col>
                    </Row>
                    <Row>
                        <Col md="10"><FormInput small value="Pro Audio" className="mb-2"></FormInput></Col>
                        <Col md="2"><Button className="float-right" size="sm" theme="danger">Delete</Button></Col>
                    </Row>
                    <Row>
                        <Col md="10"><FormInput small value="Home Cinema" className="mb-2"></FormInput></Col>
                        <Col md="2"><Button className="float-right" size="sm" theme="danger">Delete</Button></Col>
                    </Row>
                    <Row>
                        <Col md="10"><FormInput small value="Interview" className="mb-2"></FormInput></Col>
                        <Col md="2"><Button className="float-right" size="sm" theme="danger">Delete</Button></Col>
                    </Row>
                </Col>
                    <ListGroupItem className="d-flex px-3">
                    <InputGroup className="ml-auto">
                        <FormInput placeholder="New category" />
                        <InputGroupAddon type="append">
                        <Button theme="white" className="px-2">
                            <i className="material-icons">add</i>
                        </Button>
                        </InputGroupAddon>
                    </InputGroup>
                    </ListGroupItem>
                </CardBody>
            </Card>
        </Col></Row>
      </Container>
    );
  }
}

export default Categories;