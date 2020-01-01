import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../../store/actions/index";

import { Redirect } from "react-router-dom";
import TaskForm from "../../components/Task/TaskForm";

class TaskContainer extends Component {
  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
    this.props.listUsers();
  }

  render() {
    if (this.props.saved) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        {this.props.loading && (
          <p className="text-center alert alert-info">Loading ...</p>
        )}
        <TaskForm
          task={this.props.task}
          users={this.props.users}
          onSave={this.save}
        />
      </div>
    );
  }

  save(task) {
    if (!this.props.match.params.id) {
      this.props.saveTask(task);
    } else {
      this.props.updateTask(task);
    }
  }

  componentDidMount = () => {
    if (this.props.match.params.id) {
      this.props.getTaskById(this.props.match.params.id);
    }
  };
}

const mapDispatchToProps = dispatch => ({
  saveTask: task => dispatch(actions.createTask(task)),
  updateTask: task => dispatch(actions.updateTask(task)),
  newTask: () => dispatch(actions.newTask()),
  getTaskById: id => dispatch(actions.fetchTask(id)),
  listUsers: () => dispatch(actions.fetchUsers())
});

const mapStateToProps = state => {
  return {
    loading: state.tasks.loading,
    saved: state.tasks.saved,
    error: state.tasks.error,
    task: state.tasks.newInsertedTasks,
    users: state.users.users
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);
