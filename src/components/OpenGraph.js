import React from "react";
import {
  Row,
  Card,
  CardBody,
  ListGroup,
  ListGroupItem,
  CardHeader,
  Form,
} from "shards-react";
import {Field} from 'react-final-form'

import TextareaField from "./TextareaField/TextareaField";
import ImageField from "./ImageField/ImageField";

const OpenGraph = () => (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">
        Open Graph
      </h6>
    </CardHeader>
    <CardBody>
      <ListGroup flush>
        <ListGroupItem className="p-0 px-3">
          <Row noGutters>
            <h6>
              OG image - <i>1200 x 630</i>
            </h6>
          </Row>
          <Field
            name={'og_thumbnail'}
          >
            {
              (props) => (
                <ImageField {...props}/>)
            }
          </Field>
        </ListGroupItem>
        <ListGroupItem className="p-0 px-3 pt-3">
          <Row noGutters>
            <h6>OG description</h6>
          </Row>
          <Form className="add-new-post">

            <Field
              name="og_description"
              type="text"
              placeholder="Place here embed code for the newsletter subsription"
            >
              {
                (props) => (
                  <TextareaField {...props}/>)
              }
            </Field>
          </Form>
        </ListGroupItem>
      </ListGroup>
    </CardBody>
  </Card>
);


export default OpenGraph;
