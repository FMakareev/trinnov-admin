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
    FormTextarea,
    FormCheckbox} from "shards-react";

import CustomFileUpload from "../components-overview/CustomFileUpload";

const CardDetails = () => (
    <Card small className="mb-4">
        <CardHeader className="border-bottom">
            <h6 className="m-0">Card details</h6>
        </CardHeader>
        <CardBody>
        <ListGroup flush>
            <ListGroupItem className="p-0 px-3">
                <FormTextarea placeholder="Card description" className="mb-2"></FormTextarea>
                <FormCheckbox>Article with video</FormCheckbox> 
                <Row noGutters><h6>Thumbnail</h6></Row>
                <Row noGutters><img width="100%" height="auto" src={require("../../images/content-management/10.jpeg")} className="pb-2"></img> </Row>
                <Row noGutters><CustomFileUpload /></Row>
            </ListGroupItem>
        </ListGroup>
        </CardBody>
    </Card>
);




export default CardDetails;