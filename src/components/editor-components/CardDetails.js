import React from "react";
import {
  Row,
  Card,
  CardBody,
  ListGroup,
  ListGroupItem,
  CardHeader,
} from "shards-react";
import {Field} from 'react-final-form'

import TextareaField from "../TextareaField/TextareaField";
import ImageField from "../ImageField/ImageField";
import CheckboxFinalForm from "../CheckboxFinalForm/CheckboxFinalForm";

const CardDetails = () => (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">Card details</h6>
    </CardHeader>
    <CardBody>
      <ListGroup flush>
        <ListGroupItem className="p-0 px-3">
          <Field
            name="card_description"
            type="text"
            placeholder="Card description"
          >
            {
              (props) => (
                <TextareaField className="mb-2" {...props}/>)
            }
          </Field>
          <Field
            name="with_video"
            type="checkbox"
          >
            {
              (props)=>{
                return (<CheckboxFinalForm label={'Article with video'} {...props}/>)
              }
            }
          </Field>

          <Row noGutters>
            <h6>Thumbnail</h6>
          </Row>
          <Field
            name={'thumbnail'}
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


export default CardDetails;
