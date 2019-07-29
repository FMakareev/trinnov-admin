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


class PagesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        // First list of files.
        PagesList: [
          {
              name: "Technologies"
          },
          {
            name: "About Trinnov"
        },
        {
            name: "Legal mentions"
        },
        {
            name: "Privacy terms"
        },
        {
            name: "404"
        },
      ]
      };
  }

  render() {
    const {
        PagesList
    } = this.state;

    return (
        <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Pages" subtitle="List of website pages" className="text-sm-left" />
        </Row>
        <Row>
            <Col sm="12" className="mb-4">
                <Card small className="mb-4">
                    <CardBody className="p-0 pb-3">
                        <table className="table mb-0">
                        <thead className="bg-light">
                            <tr>
                            <th scope="col" className="border-0  w-50">
                                Name
                            </th>
                            <th scope="col" className="border-0">
                                
                            </th>                
                            </tr>
                        </thead>
                        <tbody>
                        {PagesList.map((page, idx) => (
                            <tr key={idx}>
                            <td>{page.name}</td>
                            <td>
                                <ButtonGroup className="mb-3 float-right">
                                    <Button outline theme="danger">Delete</Button>
                                    <Button outline theme="primary">Edit</Button>                                    
                                </ButtonGroup> 
                            </td>
                            </tr>))}
                        </tbody>
                        </table>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        </Container>
    );
  }
}




export default PagesList;