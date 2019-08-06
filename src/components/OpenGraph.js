import React from "react";
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
    FormTextarea} from "shards-react";

import CustomFileUpload from "../components/components-overview/CustomFileUpload";
  
  const OpenGraph = () => (
        <Card small className="mb-4">
            <CardHeader className="border-bottom">
                <h6 className="m-0">Open Graph</h6>
            </CardHeader>
            <CardBody>
            <ListGroup flush>
                <ListGroupItem className="p-0 px-3">
                    <Row noGutters><h6>OG image - <i>1200 x 630</i></h6></Row>
                    <Row noGutters><img width="100%" height="auto" src={require("../images/content-management/10.jpeg")} className="pb-2"></img> </Row>
                    <Row noGutters><CustomFileUpload /></Row>
                </ListGroupItem>
                <ListGroupItem className="p-0 px-3 pt-3">
                    <Row noGutters><h6>OG description</h6></Row>
                    <Form className="add-new-post">
                    <FormTextarea placeholder="Place here embed code for the newsletter subsription"></FormTextarea>
                    </Form>
                </ListGroupItem>
            </ListGroup>
            </CardBody>
        </Card>
    );




export default OpenGraph;