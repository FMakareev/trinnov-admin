/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  ButtonGroup,
  CardHeader,
  Form,
  FormInput,
  FormTextarea
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import CustomFileUpload from "../components/components-overview/CustomFileUpload";
import ReactQuill from "react-quill";

class ContactsSupport extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of files.
      ContactFormMessages: [
        {
            name: "Jack Hill",
            email: "ja@nas.co",
            subject: "HiFi is what I like",
            message: "Trinnov Audio designs and manufactures preamplifiers are so great"
        },
        {
            name: "Jack Hill",
            email: "ja@nas.co",
            subject: "HiFi is what I like",
            message: "Trinnov Audio designs and manufactures preamplifiers are so great"
        },
        {
            name: "Jack Hill",
            email: "ja@nas.co",
            subject: "HiFi is what I like",
            message: "Trinnov Audio designs and manufactures preamplifiers are so great"
        },
        {
            name: "Jack Hill",
            email: "ja@nas.co",
            subject: "HiFi is what I like",
            message: "Trinnov Audio designs and manufactures preamplifiers are so great"
        },
        {
            name: "Jack Hill",
            email: "ja@nas.co",
            subject: "HiFi is what I like",
            message: "Trinnov Audio designs and manufactures preamplifiers are so great"
        }
    ],
    SupportFormMessages: [
        {
            priority: "low",
            name: "Jack Hill",
            email: "ja@nas.co",
            subject: "HiFi is what I like",
            product: "Sierra"
        },
        {
            priority: "low",
            name: "Jack Hill",
            email: "ja@nas.co",
            subject: "HiFi is what I like",
            product: "Sierra"
        },
        {
            priority: "low",
            name: "Jack Hill",
            email: "ja@nas.co",
            subject: "HiFi is what I like",
            product: "Sierra"
        },
        {
            priority: "low",
            name: "Jack Hill",
            email: "ja@nas.co",
            subject: "HiFi is what I like",
            product: "Sierra"
        }
    ],
    ContactBranch: [
        {   
            name: "General",
            image: require("../images/content-management/10.jpeg"),
            logo: require("../images/content-management/10.jpeg"),
            contacts: 
                "Headquater<br/>5 rue Edmond Michelet<br/>93360 Neuilly-Plaisance<br/>"                
        },
        {   
            name: "HiFi",
            image: require("../images/content-management/10.jpeg"),
            logo: require("../images/content-management/10.jpeg"),
            contacts: 
                "Headquater<br/>5 rue Edmond Michelet<br/>93360 Neuilly-Plaisance<br/>"                
        }
    ]
    };
  }

  render() {
    const {
        ContactFormMessages,
        SupportFormMessages,
        ContactBranch
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Contacts and Support" subtitle="Contact forms and messages" className="text-sm-left" />
          <div className="ml-auto">
          <Button outline size="sm" theme="primary" className="mb-2 mr-1">Add Country +</Button>  
          <Button outline size="sm" theme="primary" className="mb-2 mr-1">Add City +</Button>  
          <Button className="ml-sm-auto mb-2 " theme="primary">Add distributor +</Button>
          </div>
        </Row>

        <Row>
            <Col sm="12" className="">
                <Card small className="mb-4">
                    <CardHeader className="border-bottom">
                        <Row noGutters><h6 className="m-0">Contact form messages</h6> <Button outline size="sm" className="ml-auto">Edit email</Button></Row>
                    </CardHeader>
                    <CardBody className="p-0 pb-3">
                        <table className="table mb-0">
                        <thead className="bg-light">
                            <tr>
                            <th scope="col" className="border-0">
                                Name
                            </th>
                            <th scope="col" className="border-0">
                                Email
                            </th>
                            <th scope="col" className="border-0">
                                Subject
                            </th>
                            <th scope="col" className="border-0  w-50">
                                Message
                            </th>
                            <th scope="col" className="border-0">
                                
                            </th>                
                            </tr>
                        </thead>
                        <tbody>
                        
                        {ContactFormMessages.map((message, idx) => (
                            <tr key={idx}>
                            <td>{message.name}</td>
                            <td>{message.email}</td>
                            <td>{message.subject}</td>
                            <td>{message.message}</td>
                            <td>
                                <ButtonGroup className="mb-3">
                                    <Button outline theme="danger">Delete</Button>
                                    <Button outline theme="primary">More</Button>                                    
                                </ButtonGroup> 
                            </td>
                            </tr>))}
                        </tbody>
                        </table>
                    </CardBody>
                </Card>
            </Col>
        </Row>

        <ButtonGroup className="mb-4">
            <Button theme="primary">1</Button>
            <Button theme="white">2</Button>
            <Button theme="white">3</Button>
            <Button theme="white">4</Button>
        </ButtonGroup>

        <Card small className="mb-3">
            <CardHeader className="border-bottom">
                <h6 className="m-0">Newsletter embeded code</h6>
            </CardHeader>
            <CardBody>
                <Form className="add-new-post">
                <FormTextarea placeholder="Place here embed code for the newsletter subsription"></FormTextarea>
                <Button className="float-right mt-2">Save</Button>
                </Form>
            </CardBody>
        </Card>   

        <Row>
            <Col sm="12" className="">
                <Card small className="mb-4">
                    <CardHeader className="border-bottom">
                        <Row noGutters><h6 className="m-0">Support form messages</h6> <Button outline size="sm" className="ml-auto">Edit email</Button></Row>
                    </CardHeader>
                    <CardBody className="p-0 pb-3">
                        <table className="table mb-0">
                        <thead className="bg-light">
                            <tr>
                            <th scope="col" className="border-0">
                                Priority
                            </th>
                            <th scope="col" className="border-0">
                                Name
                            </th>
                            <th scope="col" className="border-0">
                                Email
                            </th>
                            <th scope="col" className="border-0 w-50">
                                Subject
                            </th>
                            <th scope="col" className="border-0">
                                Product
                            </th>
                            <th scope="col" className="border-0">
                           
                            </th>                
                            </tr>
                        </thead>
                        <tbody>
                        
                        {SupportFormMessages.map((support, idx) => (
                            <tr key={idx}>
                            <td>{support.priority}</td>
                            <td>{support.name}</td>
                            <td>{support.email}</td>
                            <td>{support.subject}</td>
                            <td>{support.product}</td>
                            <td>
                                <ButtonGroup className="mb-3">
                                    <Button outline theme="danger">Delete</Button>
                                    <Button outline theme="primary">More</Button>                                    
                                </ButtonGroup> 
                            </td>
                            </tr>))}
                        </tbody>
                        </table>
                    </CardBody>
                </Card>
            </Col>
        </Row>

        <ButtonGroup className="mb-4">
            <Button theme="primary">1</Button>
            <Button theme="white">2</Button>
            <Button theme="white">3</Button>
            <Button theme="white">4</Button>
        </ButtonGroup>

        <Row noGutters className="d-flex my-4">
            <h4 className="text-sm-left mr-2" sm="4">Contact branches</h4> 
            <Button outline size="sm" theme="primary" className="mb-2 mr-1 ">Add branch +</Button> 
        </Row>
        <Row>
        {ContactBranch.map((contact, idx) => (
            <Col lg="6" key="idx">
                <Card  small className="mb-4">
                <CardHeader><h6 className="m-0">{contact.name}</h6> </CardHeader>
                <CardBody className="pb-3">
                    <Row noGutters>
                        <Col lg="2">Image</Col>
                        <Col>
                            <img width="auto" height="100px" src={contact.image} className="pb-2"></img> 
                        </Col>
                        <Col >
                            <CustomFileUpload />
                        </Col>
                    </Row>
                    <hr/>
                    <Row noGutters>
                        <Col lg="2">Logo</Col>
                        <Col>
                            <img width="auto" height="50px" src={contact.logo} className="pb-2"></img> 
                        </Col>
                        <Col >
                            <CustomFileUpload />
                        </Col>
                    </Row>
                    <hr/>
                    <Row noGutters>
                        <Col lg="2">Contacts</Col>
                        <Col>
                            <ReactQuill className="add-new-post__editor mb-1">
                                <div>{contact.contacts}</div>
                            </ReactQuill>
                            <Button className="float-right mt-2">Save</Button>                      
                        </Col>
                    </Row>
                </CardBody>
                </Card>
            </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default ContactsSupport;