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
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

import { Link } from 'react-router-dom';

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
      PostsListOne: 
      [
        {
          backgroundImage: require("../images/content-management/news-2.jpg"),
          category: "HiFi",
          categoryTheme: "dark",
          author: "Anna Kunis",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "HiFi Product 1",
          body:
            "However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...",
          date: "28 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/news-1.jpg"),
          category: "HiFi",
          categoryTheme: "info",
          author: "James Jamerson",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "HiFi Product 2",
          body:
            "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/news-2.jpg"),
          category: "HiFi",
          categoryTheme: "royal-blue",
          author: "Jimmy Jackson",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "HiFi Product 3",
          body:
            "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/news-1.jpg"),
          category: "HiFi",
          categoryTheme: "warning",
          author: "John James",
          authorAvatar: require("../images/avatars/3.jpg"),
          title: "HiFi Product 4",
          body:
            "How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...",
          date: "29 February 2019"
        },
        {
            backgroundImage: require("../images/content-management/news-2.jpg"),
            category: "HiFi",
            categoryTheme: "dark",
            author: "Anna Kunis",
            authorAvatar: require("../images/avatars/1.jpg"),
            title: "HiFi Product 5",
            body:
              "However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...",
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
          <PageTitle sm="4" title="Trinnov products" subtitle="Edit markets and products" className="text-sm-left" />
          <div className="ml-auto">
          <Button outline size="sm" theme="primary" className="mb-2 mr-1">Add category +</Button>  
          <Link to={'/product-editor'}><Button className="ml-sm-auto mb-2 " theme="primary">Add product +</Button></Link>
          </div>
        </Row>

        {/* First Row of Posts */}
        <Row noGutters className="d-flex my-4">
            <h3 className="text-sm-left mr-2" sm="4">HiFi</h3> 
            <Button outline size="sm" theme="primary" className="mb-2 mr-1 ">Edit category</Button> 
            <img src={require("../images/content-management/logo-hor-hifi.png")} height="30px" className="mt-2 ml-auto"></img>
        </Row>
        <Row>
        {PostsListOne.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--1">
                  <img src={post.backgroundImage} width="100%" height="auto"></img>
                <CardBody>
                  <h5 className="card-title">
                    <a href="#" className="text-fiord-blue">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">{post.body}</p>
                  <span className="text-muted">{post.date}</span><br />
                  <a href="#"><img src={post.authorAvatar} width="20px" height="auto"></img> {post.author}</a>

                  <Row noGutters className="pt-4"> 
                    <a href="#"><Badge pill className="bg-dark mr-2">HiFi</Badge></a>
                  </Row> 
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        <hr></hr>
        {/* Second Row of Posts */}
        <Row noGutters className="d-flex my-4">
            <h3 className="text-sm-left mr-2" sm="4">Home Cinema</h3> 
            <Button outline size="sm" theme="primary" className="mb-2 mr-1 ">Edit category</Button> 
            <img src={require("../images/content-management/logo-hor-cinema.png")} height="30px" className="mt-2 ml-auto"></img>
        </Row>
        <Row>
        {PostsListOne.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--1">
                  <img src={post.backgroundImage} width="100%" height="auto"></img>
                <CardBody>
                  <h5 className="card-title">
                    <a href="#" className="text-fiord-blue">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">{post.body}</p>
                  <span className="text-muted">{post.date}</span><br />
                  <a href="#"><img src={post.authorAvatar} width="20px" height="auto"></img> {post.author}</a>

                  <Row noGutters className="pt-4"> 
                    <a href="#"><Badge pill className="bg-dark mr-2">Home Cinema</Badge></a>
                  </Row> 
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Products;
