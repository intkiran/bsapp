import React from "react";
import { Form, Container, Col, Row, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";

const AddUser = props => {
  return (
    <Container>
      <Row>
        <Col>
          <Form inline>
            <FormGroup className="mb-4 mr-sm-4 mb-sm-0"></FormGroup>
            <Link to="/user" className="btn btn-primary">
              Add User
              <span className="fa fa-plus" aria-hidden="true"></span>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddUser;
