import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { history } from "../../utils/history";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      name: ""
    };
  }
  UNSAFE_componentWillReceiveProps(ble) {
    this.setState(ble.user);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onSave(this.state);
  }
  componentDidMount() {
    this.setState(this.props.user);
  }

  goBack() {
    history.push("/users");
  }

  render() {

    let userTitle = "New user";
    if (this.state.name) {
      userTitle = "Edit User ";
    }
    return (
      <Form className="ticket-container">
        <h5>{userTitle}</h5>

        <FormGroup className="col-12" row>
          <Label sm={4}>User Name</Label>
          <Col sm={6}>
            <Input
              type="text"
              name="name"
              placeholder="User Name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </Col>
        </FormGroup>

        <div className="col-12 text-center">
          <Button
            className="center-block btn-success"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
          <Link to="/users" className="btn btn-primary">
            Back
          </Link>
        </div>
      </Form>
    );
  }
}

UserForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  user: PropTypes.object
};

export default UserForm;
