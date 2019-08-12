import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput,  Row, Col, CardHeader } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const TrainingArticleEditor = () => (
    
    <Card small >
        <CardHeader className="border-bottom">
            <h6 className="m-0">Article editor</h6>
        </CardHeader>
        <CardBody>
        <FormInput size="lg" className="mb-3" placeholder="Your Post Title" />
        <FormInput size="lg" placeholder="Date of the event" className="mb-4"></FormInput> 
        <Row>
        <Col md="12">
        
            <Row >
            <Col md="6"><FormInput placeholder="Date posted" className="mb-2"></FormInput> </Col>
            <Col md="6"><FormInput placeholder="Slug" className="mb-2"></FormInput> </Col>
            </Row>
        </Col>
        </Row>
        <ReactQuill className="add-new-post__editor mb-1" />
        </CardBody>
    </Card>
);

export default TrainingArticleEditor;

