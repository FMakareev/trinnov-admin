import React from "react";
import ReactQuill from "react-quill";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    Badge,
    Button,
    ButtonGroup,
    ListGroup,
    ListGroupItem,
    CardHeader,
    Form,
    FormInput,
    FormTextarea,
    FormCheckbox,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormSelect
  } from "shards-react";

import CustomFileUpload from "../components-overview/CustomFileUpload";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const SpecificationsEditor = () => (
    <Card small className="mb-4">
        <CardHeader className="border-bottom">
            <h6 className="m-0">Specifications</h6>
        </CardHeader>
        <CardBody>
            <Row noGutters><h6>Text block</h6></Row>
            <Row className="border-bottom py-4 mb-4">
            <Col md="3"><FormInput placeholder="Analog I/O"></FormInput></Col>
            <Col><ReactQuill placeholder="Put data here"></ReactQuill></Col>
            </Row>
            <Row noGutters><h6>Gallery block</h6></Row>
            <Row className="border-bottom py-4">
            <Col md="3"><FormInput placeholder="Immersive decocing"></FormInput></Col>
            <Col md="9" className="mb-4"><ReactQuill placeholder="Put data here"></ReactQuill></Col>
            <Col md="3"><div className="border rounded p-2"><img width="100%" height="auto" src={require("../../images/content-management/10.jpeg")} className="pb-2"></img></div></Col>
            <Col md="3"><div className="border rounded p-2"><img width="100%" height="auto" src={require("../../images/content-management/9.jpeg")} className="pb-2"></img></div></Col>
            <Col md="3" ><div className=""><i className="material-icons w-100 text-center" style={{fontSize: 124}}>add_photo_alternate</i> <CustomFileUpload /></div></Col>
            </Row>
            <Row noGutters><h6>Image left block</h6></Row>
            <Row className="border-bottom py-4 mb-4">
            <Col md="3"><FormInput placeholder="Roon Ready"></FormInput></Col>
            <Col md="3"><Row noGutters><img width="100%" height="auto" src={require("../../images/content-management/10.jpeg")} className="pb-2"></img> </Row>
                <Row noGutters><CustomFileUpload /></Row></Col>
            <Col><ReactQuill placeholder="Put data here"></ReactQuill></Col>
            </Row>   
            <Row noGutters><h6>Image right block</h6></Row>
            <Row className="border-bottom py-4 mb-4">
            <Col md="3"><FormInput placeholder="Roon Ready"></FormInput></Col>
            <Col><ReactQuill placeholder="Put data here"></ReactQuill></Col>
            <Col md="3"><Row noGutters><img width="100%" height="auto" src={require("../../images/content-management/10.jpeg")} className="pb-2"></img> </Row>
                <Row noGutters><CustomFileUpload /></Row></Col>
            </Row>
            <Row><Col md="12">
            <InputGroup className="mb-3">
            <FormSelect className="mr-2 rounded">
                <option>Choose</option>
                <option>Text block</option>
                <option>Gallery block</option>
                <option>Image left block</option>
                <option>Image right block</option>
            </FormSelect>
            <Button>Add specifications block</Button>
            </InputGroup>
            </Col>
            </Row>     
        </CardBody>
    </Card>
);

export default SpecificationsEditor;
    