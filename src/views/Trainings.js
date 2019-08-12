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

class Trainings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
      PostsListOne: [
        {
          backgroundImage: require("../images/content-management/news-1.jpg"),
          category: "Business",
          categoryTheme: "dark",
          author: "Anna Kunis",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "Conduct at an replied removal an amongst",
          body:
            "However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...",
          date: "28 February 2019",
          eventDate: "28 Feb"
        },
        {
          backgroundImage: require("../images/content-management/news-2.jpg"),
          category: "Travel",
          categoryTheme: "info",
          author: "James Jamerson",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Off tears are day blind smile alone had ready",
          body:
            "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "29 February 2019",
          eventDate: "28 Feb"
        },
        {
          backgroundImage: require("../images/content-management/news-1.jpg"),
          category: "Technology",
          categoryTheme: "royal-blue",
          author: "Jimmy Jackson",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Difficult in delivered extensive at direction",
          body:
            "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "29 February 2019",
          eventDate: "28 Feb"
        },
        {
          backgroundImage: require("../images/content-management/news-2.jpg"),
          category: "Business",
          categoryTheme: "warning",
          author: "John James",
          authorAvatar: require("../images/avatars/3.jpg"),
          title: "It so numerous if he may outlived disposal",
          body:
            "How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...",
          date: "29 February 2019",
          eventDate: "28 Feb"
        },
        {
            backgroundImage: require("../images/content-management/news-1.jpg"),
            category: "Business",
            categoryTheme: "dark",
            author: "Anna Kunis",
            authorAvatar: require("../images/avatars/1.jpg"),
            title: "Conduct at an replied removal an amongst",
            body:
              "However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...",
            date: "28 February 2019",
          eventDate: "28 Feb"
          },
          {
            backgroundImage: require("../images/content-management/news-2.jpg"),
            category: "Travel",
            categoryTheme: "info",
            author: "James Jamerson",
            authorAvatar: require("../images/avatars/2.jpg"),
            title: "Off tears are day blind smile alone had ready",
            body:
              "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
            date: "29 February 2019",
          eventDate: "28 Feb"
          },
          {
            backgroundImage: require("../images/content-management/news-1.jpg"),
            category: "Technology",
            categoryTheme: "royal-blue",
            author: "Jimmy Jackson",
            authorAvatar: require("../images/avatars/2.jpg"),
            title: "Difficult in delivered extensive at direction",
            body:
              "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
            date: "29 February 2019",
          eventDate: "28 Feb"
          },
          {
            backgroundImage: require("../images/content-management/news-2.jpg"),
            category: "Business",
            categoryTheme: "warning",
            author: "John James",
            authorAvatar: require("../images/avatars/3.jpg"),
            title: "It so numerous if he may outlived disposal",
            body:
              "How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...",
            date: "29 February 2019",
          eventDate: "28 Feb"
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
          <PageTitle sm="4" title="Training events" subtitle="List of training events to add and edit" className="text-sm-left" />
          <div className="ml-auto">
          <Link to={'/training-editor'}><Button className="ml-sm-auto mb-2 " theme="primary">Add event +</Button></Link>
          </div>
        </Row>

        {/* First Row of Posts */}
        <Row>
          {PostsListOne.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--1">
              <Badge
                    pill
                    className={`card-post__category bg-dark`}
                  >
                    {post.eventDate}
                  </Badge>
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

                 
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Trainings;