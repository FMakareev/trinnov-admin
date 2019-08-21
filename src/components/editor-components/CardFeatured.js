import React from "react";
import {
  Row,
  Card,
  CardBody,
  ListGroup,
  ListGroupItem,
  CardHeader,
} from "shards-react";

import {Field} from "react-final-form";
import CheckboxFinalForm from "../CheckboxFinalForm/CheckboxFinalForm";
import ImageField from "../ImageField/ImageField";

const CardFeatured = () => (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">Card featured</h6>
    </CardHeader>
    <CardBody>
      <ListGroup flush>
        <ListGroupItem className="p-0 px-3">
          <Field
            name="is_featured"
            type="checkbox"
          >
            {
              (props) => {
                return (
                  <CheckboxFinalForm label={'Article is featured'} {...props}/>)
              }
            }
          </Field>
          <Row noGutters>
            <h6>
              Featured thumbnail
            </h6>
          </Row>

          <Field
            name={'thumbnail_featured'}
          >
            {
              (props) => (
                <ImageField {...props}/>)
            }
          </Field>

        </ListGroupItem>

      </ListGroup>
    </CardBody>
  </Card>
);


export default CardFeatured;
