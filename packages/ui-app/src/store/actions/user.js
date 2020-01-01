import * as actionTypes from "./actionTypes";
import { UserApi as axios } from "../../services/UserApi";
import toastr from "toastr";

export const fetchUsersStart = () => {
  return {
    type: actionTypes.FETCH_USERS_START
  };
};

export const fetchUsersSuccess = data => {
  return {
    type: actionTypes.FETCH_USERS_SUCCESS,
    data: data
  };
};

export const fetchUsersFail = error => {
  return {
    type: actionTypes.FETCH_USERS_FAIL,
    error: error
  };
};

export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUsersStart());
    axios
      .get("/api/v1/users")
      .then(response => {
        dispatch(fetchUsersSuccess(response.data));
      })
      .catch(err => {
        dispatch(fetchUsersFail(err));
      });
  };
};
export const fetchUserStart = () => {
  return {
    type: actionTypes.FETCH_USER_START
  };
};

export const fetchUserSuccess = data => {
  return {
    type: actionTypes.FETCH_USER_SUCCESS,
    data: data
  };
};

export const fetchUserFail = error => {
  return {
    type: actionTypes.FETCH_USER_FAIL,
    error: error
  };
};

export const fetchUser = id => {
  return dispatch => {
    dispatch(fetchUserStart(id));

    axios
      .get("/api/v1/users/" + id)
      .then(response => {

        dispatch(fetchUserSuccess(response.data));
        toastr.success("User Successfully retrieved");
      })
      .catch(err => {
        dispatch(fetchUserFail(err));
      });
  };
};
export const createUserStart = () => {
  return {
    type: actionTypes.CREATE_USER_START
  };
};

export const createUserSuccess = data => {
  return {
    type: actionTypes.CREATE_USER_SUCCESS,
    data: data
  };
};

export const createUserFail = error => {
  return {
    type: actionTypes.CREATE_USER_FAIL,
    error: error
  };
};

export const createUser = (data, sortBy) => {
  return dispatch => {
    dispatch(createUserStart());
    axios
      .post("/api/v1/users", data)
      .then(response => {
        toastr.success("User Successfully created");
        dispatch(createUserSuccess(response.data));
      })
      .catch(err => {
        dispatch(createUserFail(err));
      });
  };
};
export const updateUserStart = () => {
  return {
    type: actionTypes.UPDATE_USER_START
  };
};

export const updateUserSuccess = data => {
  return {
    type: actionTypes.UPDATE_USER_SUCCESS,
    data: data
  };
};

export const updateUserFail = error => {
  return {
    type: actionTypes.UPDATE_USER_FAIL,
    error: error
  };
};

export const updateUser = (data, sortBy) => {
  return dispatch => {
    dispatch(updateUserStart());
    axios
      .put("/api/v1/users/" + data._id, data)
      .then(response => {
        dispatch(updateUserSuccess(response.data));
        toastr.success("User Successfully updated");
      })
      .catch(err => {
        dispatch(updateUserFail(err));
      });
  };
};
export const deleteUserStart = () => {
  return {
    type: actionTypes.DELETE_USER_START
  };
};

export const deleteUserSuccess = data => {
  return {
    type: actionTypes.DELETE_USER_SUCCESS,
    data: data
  };
};

export const deleteUserFail = error => {
  return {
    type: actionTypes.DELETE_USER_FAIL,
    error: error
  };
};

export const deleteUser = id => {
  return dispatch => {
    dispatch(deleteUserStart());
    axios
      .delete("/api/v1/users/" + id)
      .then(response => {
        dispatch(deleteUserSuccess(response.data));
        toastr.success("User Successfully deleted");
      })
      .catch(err => {
        dispatch(deleteUserFail(err));
      });
  };
};

export const newUserStart = () => {
  return {
    type: actionTypes.NEW_USER_START
  };
};

export const newUserSuccess = data => {
  return {
    type: actionTypes.NEW_USER_SUCCESS,
    data: data
  };
};

export const newUserFail = error => {
  return {
    type: actionTypes.NEW_USER_FAIL,
    error: error
  };
};
export const newUser = data => {
  return dispatch => {
    dispatch(newUserStart());
    dispatch(newUserSuccess("success"));
    dispatch(newUserFail("error"));
  };
};
