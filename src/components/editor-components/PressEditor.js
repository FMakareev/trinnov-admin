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

const PressEditor = () => (
    <Card small className="mb-4">
        <CardHeader className="border-bottom">
            <h6 className="m-0">Press editor</h6>
        </CardHeader>
        <CardBody>
            <Row>
                <Col md="4">
                <Col className="rounded border p-2">
                <img src={require("../../images/content-management/press-1.png")} className="pb-2" style={{maxWidth: '100%', maxHeigh: '70px'}}></img>
                <CustomFileUpload />
                <FormInput placeholder="Press article name" className="mb-2"/>
                <FormInput placeholder="Press article link" className="mb-2"/>
                <FormTextarea placeholder="Input article teaser" style={{height: '200px'}} value="By way of a new firmware update 1.1.0, Rode Microphones has enhanced its RodeCaster Pro podcast production console with the highly requested multitrack recording feature. The update also brings a more user-friendly interface and channel selection. All existing customers will be able to update their RodeCaster Pro with multitrack recording, and all new units will feature the update.The multitrack feature will record 14 tracks;"/>
                </Col>
                </Col>
                
                <Col md="4">
                <Col className="rounded border p-2">
                <img src={require("../../images/content-management/press-2.png")} className="pb-2" style={{maxWidth: '100%', maxHeigh: '70px'}}></img>
                <CustomFileUpload />
                <FormInput placeholder="Award name" className="mb-2"/>
                <FormInput placeholder="Award link" className="mb-2"/>
                <FormTextarea placeholder="Input article teaser" style={{height: '200px'}} value="By way of a new firmware update 1.1.0, Rode Microphones has enhanced its RodeCaster Pro podcast production console with the highly requested multitrack recording feature. The update also brings a more user-friendly interface and channel selection. All existing customers will be able to update their RodeCaster Pro with multitrack recording, and all new units will feature the update.The multitrack feature will record 14 tracks;"/>
                </Col>
                </Col>
                
                <Col md="4" >
                <Col className="rounded border p-2">
                <img src={require("../../images/content-management/press-1.png")} className="pb-2" style={{maxWidth: '100%', maxHeigh: '70px'}}></img>
                <CustomFileUpload />
                <FormInput placeholder="Award name" className="mb-2"/>
                <FormInput placeholder="Award link" className="mb-2"/>
                <FormTextarea placeholder="Input article teaser" style={{height: '200px'}}/>
                </Col>
                </Col>

                <Col md="4" >
                
                <i className="material-icons w-100 text-center" style={{fontSize: 124}}>add_photo_alternate</i> 
                <CustomFileUpload />
                <FormInput placeholder="Award name" className="mb-2"/>
                <FormInput placeholder="Award link" className="mb-2"/>
                <FormTextarea placeholder="Input article teaser" className="mb-2" style={{height: '200px'}}/>
                <Button className="btn-block">Add the press article</Button>
                </Col>
            </Row>
        </CardBody>
    </Card>
    );

export default PressEditor;