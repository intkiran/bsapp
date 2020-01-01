import React from "react";
import { Form, Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

const AddTasks = props => {
  return (
    <Container>
      <Row>
        <Col>
          <Form inline className="App-Movie">
            <Link to="/task" className="btn btn-primary">
              Add Task
              <span className="fa fa-plus" aria-hidden="true"></span>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddTasks;
