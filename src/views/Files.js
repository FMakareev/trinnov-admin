/* eslint jsx-a11y/anchor-is-valid: 0 */

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
  CardHeader
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import { Link } from 'react-router-dom';

class Files extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of files.
      FilesListOne: [
          {
              icon: "pdf",
              name: "usb-manual-eng.pdf",
              folder: "Downloads"
          },
          {
            icon: "pdf",
            name: "usb-manual-eng.pdf",
            folder: "Downloads"
          },
          {
            icon: "pdf",
            name: "usb-manual-eng.pdf",
            folder: "Drivers"
          }
      ]
    };
  }

  render() {
    const {
      FilesListOne
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Files" subtitle="Files for Trinnov products" className="text-sm-left" />
        </Row>

        {/* PRODUCT CATEGORY 1 */}
        <Row noGutters className="d-flex my-4">
            <h3 className="text-sm-left mr-2" sm="4">Home Cinema</h3> 
            <Button outline size="sm" theme="primary" className="mb-2 mr-1 ">Edit category</Button> 
        </Row>
        <Row>
            <Col lg="6" className="mb-4">
                <Card small className="mb-4">
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Product name</h6>
                    </CardHeader>
                    <CardBody className="p-0 pb-3">
                        <table className="table mb-0">
                        <thead className="bg-light">
                            <tr>
                            <th scope="col" className="border-0">
                                File type
                            </th>
                            <th scope="col" className="border-0">
                                Name
                            </th>
                            <th scope="col" className="border-0">
                                Folder
                            </th>
                            <th scope="col" className="border-0">
                                
                            </th>                
                            </tr>
                        </thead>
                        <tbody>
                        {FilesListOne.map((file, idx) => (
                            <tr key={idx}>
                            <td>{file.icon}</td>
                            <td>{file.name}</td>
                            <td>{file.folder}</td>
                            <td>
                                <ButtonGroup className="mb-3 float-right">
                                    <Button outline theme="danger">Delete</Button>
                                    <Link to={'/file-editor'}><Button outline theme="primary">Edit</Button></Link>                                   
                                </ButtonGroup> 
                            </td>
                            </tr>))}
                        </tbody>
                        </table>
                    </CardBody>
                    <CardFooter>
                    <Link to={'/file-editor'}><Button className="btn-block">+ Add File</Button></Link>
                    </CardFooter>
                </Card>
            </Col>
            <Col lg="6" className="mb-4">
                <Card small className="mb-4">
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Product name</h6>
                    </CardHeader>
                    <CardBody className="p-0 pb-3">
                        <table className="table mb-0">
                        <thead className="bg-light">
                            <tr>
                            <th scope="col" className="border-0">
                            File type
                            </th>
                            <th scope="col" className="border-0">
                                Name
                            </th>
                            <th scope="col" className="border-0">
                                Folder
                            </th>
                            <th scope="col" className="border-0">
                                
                            </th>                
                            </tr>
                        </thead>
                        <tbody>
                        {FilesListOne.map((file, idx) => (
                            <tr key={idx}>
                            <td>{file.icon}</td>
                            <td>{file.name}</td>
                            <td>{file.folder}</td>
                            <td>
                                <ButtonGroup className="mb-3 float-right">
                                    <Button outline theme="danger">Delete</Button>
                                    <Link to={'/file-editor'}><Button outline theme="primary">Edit</Button></Link>                                   
                                </ButtonGroup> 
                            </td>
                            </tr>))}
                        </tbody>
                        </table>
                    </CardBody>
                    <CardFooter>
                    <Link to={'/file-editor'}><Button className="btn-block">+ Add File</Button></Link>
                    </CardFooter>
                </Card>
            </Col>
            <Col lg="6" className="mb-4">
                <Card small className="mb-4">
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Product name</h6>
                    </CardHeader>
                    <CardBody className="p-0 pb-3">
                        <table className="table mb-0">
                        <thead className="bg-light">
                            <tr>
                            <th scope="col" className="border-0">
                            File type
                            </th>
                            <th scope="col" className="border-0">
                                Name
                            </th>
                            <th scope="col" className="border-0">
                                Folder
                            </th>
                            <th scope="col" className="border-0">
                                
                            </th>                
                            </tr>
                        </thead>
                        <tbody>
                        {FilesListOne.map((file, idx) => (
                            <tr key={idx}>
                            <td>{file.icon}</td>
                            <td>{file.name}</td>
                            <td>{file.folder}</td>
                            <td>
                                <ButtonGroup className="mb-3 float-right">
                                    <Button outline theme="danger">Delete</Button>
                                    <Link to={'/file-editor'}><Button outline theme="primary">Edit</Button></Link>
                                </ButtonGroup> 
                            </td>
                            </tr>))}
                        </tbody>
                        </table>
                    </CardBody>
                    <CardFooter>
                    <Link to={'/file-editor'}><Button className="btn-block">+ Add File</Button></Link>
                    </CardFooter>
                </Card>
            </Col>
        </Row>
        
        <hr></hr>
        {/* PRODUCT CATEGORY 2 */}
        <Row noGutters className="d-flex my-4">
            <h3 className="text-sm-left mr-2" sm="4">Home Cinema</h3> 
            <Button outline size="sm" theme="primary" className="mb-2 mr-1 ">Edit category</Button> 
        </Row>
        <Row>
            <Col lg="6" className="mb-4">
                <Card small className="mb-4">
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Product name</h6>
                    </CardHeader>
                    <CardBody className="p-0 pb-3">
                        <table className="table mb-0">
                        <thead className="bg-light">
                            <tr>
                            <th scope="col" className="border-0">
                            File type
                            </th>
                            <th scope="col" className="border-0">
                                Name
                            </th>
                            <th scope="col" className="border-0">
                                Folder
                            </th>
                            <th scope="col" className="border-0">
                                
                            </th>                
                            </tr>
                        </thead>
                        <tbody>
                        {FilesListOne.map((file, idx) => (
                            <tr key={idx}>
                            <td>{file.icon}</td>
                            <td>{file.name}</td>
                            <td>{file.folder}</td>
                            <td>
                                <ButtonGroup className="mb-3 float-right">
                                    <Button outline theme="danger">Delete</Button>
                                    <Link to={'/file-editor'}><Button outline theme="primary">Edit</Button></Link>                                    
                                </ButtonGroup> 
                            </td>
                            </tr>))}
                        </tbody>
                        </table>
                    </CardBody>
                    <CardFooter>
                    <Link to={'/file-editor'}><Button className="btn-block">+ Add File</Button></Link>
                    </CardFooter>
                </Card>
            </Col>
        </Row>
      </Container>
    );
  }
}

export default Files;