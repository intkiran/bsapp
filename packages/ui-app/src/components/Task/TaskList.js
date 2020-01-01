import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Table, Button, Container } from "reactstrap";

const TaskList = ({ tasks, onDelete }) => {
  return !tasks.length ? (
    <p className="alert alert-warning text-center">No Tasks found.</p>
  ) : (
    <div>
      <Container>
        <Table striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((item, index) => (
              <tr key={index}>
                <td>{item._id}</td>
                <td>{item.description}</td>
                <td>{item.state}</td>
                <td>{item.user_id}</td>
                <td>
                  <Button
                    outline
                    className="btn btn-primary"
                    onClick={() => onDelete(item._id)}
                  >
                    <span className="fa fa-add" aria-hidden="true">
                      Delete
                    </span>
                  </Button>

                  <Link to={`/task/${item._id}`} className="btn btn-primary">
                    <span className="fa fa-pencil" aria-hidden="true">
                      Edit
                    </span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
TaskList.propTypes = {
  tasks: PropTypes.object,
  onDelete: PropTypes.func
};

export default TaskList;
