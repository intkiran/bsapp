import React, { Component } from "react";
import TasksList from "./../../components/Task/TaskList";
import { connect } from "react-redux";
import * as actions from "./../../store/actions/index";
import AddTask from "./../../components/Task/TaskAdd";

class TaskListContainer extends Component {
  constructor(props) {
    super(props);
    this.deleteTask = this.deleteTask.bind(this);
    this.props.listTasks();
  }

  render() {
    const result = this.props.loading ? (
      <p className="text-center alert alert-info">Loading Tasks...</p>
    ) : (
      <>
        <h5>Task List</h5>

        <AddTask />
        <TasksList tasks={this.props.tasks} onDelete={this.deleteTask} />
      </>
    );
    return <div className="tasks">{result}</div>;
  }

  deleteTask(id) {
    if (window.confirm("Are you sure you want to delete this task?")) {
      this.props.deleteTask(id);
    }
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks,
    loading: state.tasks.loading,
    error: state.tasks.error
  };
};
const mapDispatchToProps = dispatch => {
  const dd = {
    listTasks: () => dispatch(actions.fetchTasks()),
    deleteTask: id => dispatch(actions.deleteTask(id))
  };
  return dd;
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);
