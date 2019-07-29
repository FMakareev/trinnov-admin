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


class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        // First list of files.
        UsersList: [
          {
              avatar: require("../images/avatars/0.jpg"),
              name: "Name 1",
              role: "Administrator",
              email: "e@mail.com"
          },
          {
            avatar: require("../images/avatars/1.jpg"),
            name: "Name 2",
            role: "Moderator",
            email: "onelonglong@email.com"
        },
        {
            avatar: require("../images/avatars/0.jpg"),
            name: "Name 1",
            role: "Administrator",
            email: "e@mail.com"
        },
        {
          avatar: require("../images/avatars/1.jpg"),
          name: "Name 2",
          role: "Moderator",
          email: "onelonglong@email.com"
      }
      ]
      };
  }

  render() {
    const {
        UsersList
    } = this.state;

    return (
        <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Users" subtitle="List of administrators and moderators" className="text-sm-left" />
          <Button className="ml-sm-auto mb-2 " theme="primary">Add user +</Button>
        </Row>
        <Row>
            <Col sm="12" className="mb-4">
                <Card small className="mb-4">
                    <CardBody className="p-0 pb-3">
                        <table className="table mb-0">
                        <thead className="bg-light">
                            <tr>
                            <th scope="col" className="border-0">
                                Avatar
                            </th>
                            <th scope="col" className="border-0">
                                Name
                            </th>
                            <th scope="col" className="border-0">
                                Role
                            </th>
                            <th scope="col" className="border-0">
                                Email
                            </th>
                            <th scope="col" className="border-0">
                                
                            </th>                
                            </tr>
                        </thead>
                        <tbody>
                        {UsersList.map((user, idx) => (
                            <tr key={idx}>
                            <td><div style={{ backgroundImage: `url(${user.avatar})`, height: "40px", width: "40px", borderRadius: "25px", backgroundSize: "cover" }}></div></td>
                            <td>{user.name}</td>
                            <td>{user.role}</td>
                            <td>{user.email}</td>
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




export default Users;