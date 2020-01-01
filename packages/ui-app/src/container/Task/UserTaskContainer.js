import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../../store/actions/index";
import TasksList from "./../../components/Task/TaskList";

class UserTaskContainer extends Component {
  constructor(props) {
    super(props);
    this.props.listTasks(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        {this.props.loading && (
          <p className="text-center alert alert-info">Loading ...</p>
        )}
        <TasksList tasks={this.props.tasks} />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  listTasks: id => dispatch(actions.fetchUserTasks(id))
});

const mapStateToProps = state => {
  return {
    loading: state.tasks.loading,
    error: state.tasks.error,
    tasks: state.tasks.tasks
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTaskContainer);
