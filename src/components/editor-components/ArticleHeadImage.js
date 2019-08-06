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

const ArticleHeadImage = () => (
    <Card small className="mb-4">
        <CardHeader className="border-bottom">
            <h6 className="m-0">Head image</h6>
        </CardHeader>
        <CardBody>
            <Row noGutters><img width="100%" height="auto" src={require("../../images/content-management/head-image.png")} className="pb-2"></img> </Row>
            <Row noGutters><CustomFileUpload /></Row>
        </CardBody>
    </Card>
);




export default ArticleHeadImage;