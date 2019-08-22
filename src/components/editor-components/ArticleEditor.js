import React from "react";
import {Field} from 'react-final-form'

import {
  Card,
  CardBody,
  Row,
  Col,
  CardHeader
} from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import TextField from "../TextField/TextField";
import BlockEditor from "../BlockEditor/BlockEditor";



const ArticleEditor = ({EditorRefInstance}) => {

  return (

    <Card small>
      <CardHeader className="border-bottom">
        <h6 className="m-0">Article editor</h6>
      </CardHeader>
      <CardBody>
        <Field
          name="title"
          type="text"
          placeholder="Your Post Title"
        >
          {
            (props) => (<TextField size="lg" className="mb-3" {...props}/>)
          }
        </Field>
        <Row>
          <Col md="12">
            <Field
              name="slug"
              type="text"
              placeholder="Slug"
            >
              {
                (props) => (<TextField size="lg" className="mb-3" {...props}/>)
              }
            </Field>
          </Col>
        </Row>
        <Field
          name="content"
          type="text"
        >
          {
            (props) => (<BlockEditor
              EditorRefInstance={EditorRefInstance}
              {...props}/>)
          }
        </Field>
      </CardBody>
    </Card>
  );
}

export default ArticleEditor;
