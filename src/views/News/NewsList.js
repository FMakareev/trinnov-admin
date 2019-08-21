import React, {Fragment} from 'react';
import {Badge, Card, CardBody, Col, Row} from "shards-react";

const NewsList = ({data}) => {
  return (
    <Fragment>
      {
        Array.isArray(data) &&
        data.map((post, idx) => (
          <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
            <Card small className="card-post card-post--1">
              <img
                src={post.thumbnail}
                width="100%"
                height="auto"
              />
              <CardBody>
                <h5 className="card-title">
                  <a href="#" className="text-fiord-blue">
                    {post.title}
                  </a>
                </h5>
                <p className="card-text d-inline-block mb-3">
                  {post.card_description}
                </p>
                <span className="text-muted">
                    {post.created_at}
                </span>
                <br/>
                <a href="#">
                  <img
                    src={post.authorAvatar}
                    width="20px"
                    height="auto"
                  />
                  {post.author}
                </a>

                <Row noGutters className="pt-4">
                  {
                    Array.isArray(post) && post.map((tag, index) => (
                      <a key={`tag-${index}`} href="#">
                        <Badge pill className="bg-dark mr-2">
                          {tag && tag.tag_name}
                        </Badge>
                      </a>
                    ))
                  }
                </Row>
              </CardBody>
            </Card>
          </Col>
        ))
      }
    </Fragment>
  );
};

export default NewsList;
