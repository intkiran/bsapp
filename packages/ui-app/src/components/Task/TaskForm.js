import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Select from "react-select";

import { history } from "../../utils/history";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      description: "",
      state: "",
      user_id: "",
      _id: "",
      selectedUser: [],
      selectedState: []
    };
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
  handleUserSelectChange = user => {
    this.setState(
      prevState => {
        return {
          ...prevState,
          selectedUser: user,
          user_id: user.value
        };
      },
      () => console.log("Updated State ")
    );
  };
  handleStatusSelectChange = status => {
    this.setState(
      prevState => {
        return {
          ...prevState,
          selectedState: status,
          state: status.value
        };
      },
      () => console.log("Updated State ")
    );
  };

  goBack() {
    history.push("/tasks");
  }
  UNSAFE_componentWillReceiveProps(ble) {
    debugger;
    let users = ble.users;
    let existingUserId = null;
    if (ble.task) {
      existingUserId = ble.task.user_id;
    }

    let filtered = [];
    if (existingUserId) {
      users.filter(function(oldData) {
        if (existingUserId === oldData._id) {
          filtered.push({
            value: oldData._id,
            label: oldData.name
          });
        }
      });
    } else {
      filtered = this.state.selectedUser;
    }

    this.setState(
      prevState => {
        return {
          ...prevState,
          selectedUser: filtered,
          selectedState: { value: ble.task.state, label: ble.task.state }
        };
      },
      () => console.log("Updated State ")
    );
    this.setState(ble.task);
  }
  render() {
    let userTitle = "New Task";
    if (this.state.description) {
      userTitle = "Edit Task ";
    }
    return (
      <Form className="task-container">
        <h5>{userTitle}</h5>

        <FormGroup className="col-12" row>
          <Label sm={4}>Description</Label>
          <Col sm={6}>
            <Input
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </Col>
        </FormGroup>
        <FormGroup className="col-12" row>
          <Label sm={4}>Users</Label>
          <Col sm={6}>
            <Select
              name="user_id"
              value={this.state.selectedUser}
              onChange={this.handleUserSelectChange}
              options={this.props.users.map((user, name) => ({
                value: user._id,
                label: user.name
              }))}
            />
          </Col>
        </FormGroup>
        <FormGroup className="col-12" row>
          <Label sm={4}>State</Label>
          <Col sm={6}>
            <Select
              name="status"
              value={this.state.selectedState}
              onChange={this.handleStatusSelectChange}
              options={["to do", "done"].map(status => ({
                value: status,
                label: status
              }))}
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
          <Link to="/tasks" className="btn btn-primary">
            Back
          </Link>
        </div>
      </Form>
    );
  }
}

TaskForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  task: PropTypes.object
};

export default TaskForm;
