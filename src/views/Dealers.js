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

class Dealers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of files.
      DealersListOne: [
        {
            category: "HiFi",
            type: "Reseller",
            name: "HIFI Solutions"
        },
        {
            category: "HiFi",
            type: "Distributor",
            name: "NAUTILE ACOUSTIQUE"
        },
        {
            category: "Home Cinema",
            type: "Reseller",
            name: "AUDIO FIDELITE"
        },
        {
            category: "Pro Audio",
            type: "Distributor",
            name: "HIFI35"
        },
        {
            category: "Cinema",
            type: "Reseller",
            name: "LIXERTON"
        }
    ]
    };
  }

  render() {
    const {
      DealersListOne
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Dealers" subtitle="List of dealers grouped by Countries and Cities" className="text-sm-left" />
          <div className="ml-auto">
          <Button outline size="sm" theme="primary" className="mb-2 mr-1">Add Country +</Button>  
          <Button outline size="sm" theme="primary" className="mb-2 mr-1">Add City +</Button>  
          <Button className="ml-sm-auto mb-2 " theme="primary">Add distributor +</Button>
          </div>
        </Row>

        {/* DEALERS COUNTRY 1 */}
        <Row noGutters className="d-flex my-4">
            <h3 className="text-sm-left mr-2" sm="4">France</h3> 
        </Row>
        <Row>
            <Col sm="12" className="mb-4">
                <Card small className="mb-4">
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Paris</h6>
                    </CardHeader>
                    <CardBody className="p-0 pb-3">
                        <table className="table mb-0">
                        <thead className="bg-light">
                            <tr>
                            <th scope="col" className="border-0">
                                Category
                            </th>
                            <th scope="col" className="border-0">
                                Type
                            </th>
                            <th scope="col" className="border-0  w-50">
                                Name
                            </th>
                            <th scope="col" className="border-0">
                                
                            </th>                
                            </tr>
                        </thead>
                        <tbody>
                        {DealersListOne.map((dealer, idx) => (
                            <tr key={idx}>
                            <td>{dealer.category}</td>
                            <td>{dealer.type}</td>
                            <td><b className="text-uppercase">{dealer.name}</b></td>
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
                    <CardFooter>
                        <Button className="btn-block">+ Add Distributor</Button>
                    </CardFooter>
                </Card>
            </Col>

            <Col sm="12" className="mb-4">
                <Card small className="mb-4">
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Saint-Brevin-les-Pins</h6>
                    </CardHeader>
                    <CardBody className="p-0 pb-3">
                        <table className="table mb-0">
                        <thead className="bg-light">
                            <tr>
                            <th scope="col" className="border-0">
                                Category
                            </th>
                            <th scope="col" className="border-0">
                                Type
                            </th>
                            <th scope="col" className="border-0  w-50">
                                Name
                            </th>
                            <th scope="col" className="border-0">
                                
                            </th>                
                            </tr>
                        </thead>
                        <tbody>
                        {DealersListOne.map((dealer, idx) => (
                            <tr key={idx}>
                            <td>{dealer.category}</td>
                            <td>{dealer.type}</td>
                            <td><b className="text-uppercase">{dealer.name}</b></td>
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
                    <CardFooter>
                        <Button className="btn-block">+ Add Distributor</Button>
                    </CardFooter>
                </Card>
            </Col>
        </Row>
        
        <hr></hr>
        {/* DEALERS COUNTRY 1 */}
        <Row noGutters className="d-flex my-4">
            <h3 className="text-sm-left mr-2" sm="4">Germany</h3> 
        </Row>
        <Row>
            <Col sm="12" className="mb-4">
                <Card small className="mb-4">
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Berlin</h6>
                    </CardHeader>
                    <CardBody className="p-0 pb-3">
                        <table className="table mb-0">
                        <thead className="bg-light">
                            <tr>
                            <th scope="col" className="border-0">
                                Category
                            </th>
                            <th scope="col" className="border-0">
                                Type
                            </th>
                            <th scope="col" className="border-0  w-50">
                                Name
                            </th>
                            <th scope="col" className="border-0">
                                
                            </th>                
                            </tr>
                        </thead>
                        <tbody>
                        {DealersListOne.map((dealer, idx) => (
                            <tr key={idx}>
                            <td>{dealer.category}</td>
                            <td>{dealer.type}</td>
                            <td><b className="text-uppercase">{dealer.name}</b></td>
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
                    <CardFooter>
                        <Button className="btn-block">+ Add Distributor</Button>
                    </CardFooter>
                </Card>
            </Col>
        </Row>
        
        
      </Container>
    );
  }
}

export default Dealers;