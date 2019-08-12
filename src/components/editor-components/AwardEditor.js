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

const AwardEditor = () => (
    <Card small className="mb-4">
            <CardHeader className="border-bottom">
                <h6 className="m-0">Award editor</h6>
            </CardHeader>
            <CardBody>
                <Row>
                  <Col md="4">
                  <Col className="rounded border p-2">
                  <img src={require("../../images/content-management/award-1.png")} className="pb-2" style={{maxWidth: '100%', maxHeigh: '70px'}}></img>
                  <CustomFileUpload />
                  <FormInput placeholder="Award name" className="mb-2"/>
                  <FormInput placeholder="Award link" className="mb-2"/>
                  </Col>
                  </Col>
                  
                  <Col md="4">
                  <Col className="rounded border p-2">
                  <img src={require("../../images/content-management/award-2.png")} className="pb-2" style={{maxWidth: '100%', maxHeigh: '70px'}}></img>
                  <CustomFileUpload />
                  <FormInput placeholder="Award name" className="mb-2"/>
                  <FormInput placeholder="Award link" className="mb-2"/>
                  </Col>
                  </Col>
                  
                  <Col md="4" >
                  <Col className="rounded border p-2">
                  <img src={require("../../images/content-management/award-3.png")} className="pb-2" style={{maxWidth: '100%', maxHeigh: '70px'}}></img>
                  <CustomFileUpload />
                  <FormInput placeholder="Award name" className="mb-2"/>
                  <FormInput placeholder="Award link" className="mb-2"/>
                  </Col>
                  </Col>

                  <Col md="4" >
                  
                  <i className="material-icons w-100 text-center" style={{fontSize: 124}}>add_photo_alternate</i> 
                  <CustomFileUpload />
                  <FormInput placeholder="Award name" className="mb-2"/>
                  <FormInput placeholder="Award link" className="mb-2"/>
                  <Button className="btn-block mb-2">Add the award</Button>
                  </Col>
                </Row>
            </CardBody>
        </Card>
    );

export default AwardEditor;