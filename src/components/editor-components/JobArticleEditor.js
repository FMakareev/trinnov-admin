import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, CardFooter, Form, FormInput,  Row, Col, CardHeader, FormGroup, FormCheckbox, InputGroup, InputGroupAddon, InputGroupText } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import Checkboxes from "../components-overview/Checkboxes";

const JobArticleEditor = () => (
    
    <Card small >
        <CardHeader className="border-bottom">
            <h6 className="m-0">Job editor</h6>
        </CardHeader>
        <CardBody>
        <FormInput size="lg" className="mb-3" placeholder="Job Title" />
        <strong className="text-muted d-block mb-2">
            Job respond email (leave if want to get email on default address)
        </strong>
        <FormGroup>
        <InputGroup className="mb-3">
          <InputGroupAddon type="prepend">
            <InputGroupText>@</InputGroupText>
          </InputGroupAddon>
          <FormInput placeholder="Email" />
        </InputGroup>
      </FormGroup>
        <Row>
        <Col md="12">
            <Row >
            <Col md="6"><FormInput placeholder="Date posted" className="mb-2"></FormInput> </Col>
            <Col md="6"><FormInput placeholder="Slug" className="mb-2"></FormInput> </Col>
            </Row>
        </Col>
        </Row>
        <ReactQuill className="add-new-post__editor mb-1" />
        <Row noGutters><FormCheckbox> The job is actual</FormCheckbox></Row>
        </CardBody>
    </Card>
);

export default JobArticleEditor;

