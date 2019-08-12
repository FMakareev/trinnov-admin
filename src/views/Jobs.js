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
import { Link } from "react-router-dom"
 
class Jobs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
      PostsListOne: [
        {
          backgroundImage: require("../images/content-management/1.jpeg"),
          author: "Anna Kunis",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "Market Researcher (Contract)",
          body:
            "We’re looking for a Market Researcher to join the Pinterest Research team. This individual will work closely with a senior market researcher.",
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
          <PageTitle sm="4" title="Jobs" subtitle="List of vacancies" className="text-sm-left" />
          <div className="ml-auto">
          <Link to={'/jobs-editor'}><Button className="ml-sm-auto mb-2 " theme="primary">Add job +</Button></Link>
          </div>
        </Row>

        {/* First Row of Posts */}
        <Row>
          {PostsListOne.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--1">                  
                <CardBody>
                  <h5 className="card-title">
                    <a href="#" className="text-fiord-blue">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">{post.body}</p>
                  <span className="text-muted">{post.date}</span><br />
                  <a href="#"><img src={post.authorAvatar} width="20px" height="auto"></img> {post.author}</a>                 
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Jobs;