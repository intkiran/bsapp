import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Table, Button, Container } from "reactstrap";

const UserList = ({ users, onDelete }) => {
  return !users.length ? (
    <p className="alert alert-warning text-center">No Users found.</p>
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
            {users.map((item, index) => (
              <tr key={index}>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>
                  <Link
                    to={"/usertasks/" + item._id}
                    className="btn btn-info   outline  btn-sm "
                  >
                    Tasks
                  </Link>
                  <Button
                    outline
                    color="danger"
                    size="sm"
                    onClick={() => onDelete(item._id)}
                  >
                    Delete
                  </Button>
                  <Link to={`/user/${item._id}`} className="btn btn-primary">
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
UserList.propTypes = {
  user: PropTypes.object,
  onDelete: PropTypes.func
};

export default UserList;
