import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput,  Row, Col, CardHeader } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const ProductOverviewEditor = () => (
    
    <Card small className="mb-4">
        <CardHeader className="border-bottom">
            <h6 className="m-0">Overview</h6>
        </CardHeader>
        <CardBody>
        <ReactQuill className="add-new-post__editor mb-1" />
        </CardBody>
    </Card>
);

export default ProductOverviewEditor;
