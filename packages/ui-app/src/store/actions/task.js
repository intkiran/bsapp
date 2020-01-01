import * as actionTypes from "./actionTypes";
import { TaskApi as axios } from "../../services/TaskApi";
import toastr from "toastr";

export const fetchTasksStart = () => {
  return {
    type: actionTypes.FETCH_TASKS_START
  };
};

export const fetchTasksSuccess = data => {
  return {
    type: actionTypes.FETCH_TASKS_SUCCESS,
    data: data
  };
};
export const fetchUserTasksSuccess = data => {
  return {
    type: actionTypes.FETCH_USERTASKS_SUCCESS,
    data: data
  };
};
export const fetchUserTasksFail = error => {
  return {
    type: actionTypes.FETCH_USERTASKS_FAIL,
    error: error
  };
};
export const fetchTasksFail = error => {
  return {
    type: actionTypes.FETCH_TASKS_FAIL,
    error: error
  };
};
export const fetchUserTasks = id => {
  debugger;
  return dispatch => {
    axios
      .get("/api/v1/tasks/users/"+id)
      .then(response => {
        dispatch(fetchUserTasksSuccess(response.data));
      })
      .catch(err => {
        dispatch(fetchUserTasksFail(err));
      });
  };
};
export const fetchTasks = () => {
  debugger;
  return dispatch => {
    dispatch(fetchTasksStart());
    axios
      .get("/api/v1/tasks")
      .then(response => {
        dispatch(fetchTasksSuccess(response.data));
      })
      .catch(err => {
        dispatch(fetchTasksFail(err));
      });
  };
};
export const fetchTaskStart = () => {
  return {
    type: actionTypes.FETCH_TASK_START
  };
};

export const fetchTaskSuccess = data => {
  return {
    type: actionTypes.FETCH_TASK_SUCCESS,
    data: data
  };
};

export const fetchTaskFail = error => {
  return {
    type: actionTypes.FETCH_TASK_FAIL,
    error: error
  };
};

export const fetchTask = id => {
  return dispatch => {
    dispatch(fetchTaskStart(id));

    axios
      .get("/api/v1/tasks/" + id)
      .then(response => {

        dispatch(fetchTaskSuccess(response.data));
        toastr.success("Task Successfully retrieved");
      })
      .catch(err => {
        dispatch(fetchTaskFail(err));
      });
  };
};
export const createTaskStart = () => {
  return {
    type: actionTypes.CREATE_TASK_START
  };
};

export const createTaskSuccess = data => {
  return {
    type: actionTypes.CREATE_TASK_SUCCESS,
    data: data
  };
};

export const createTaskFail = error => {
  return {
    type: actionTypes.CREATE_TASK_FAIL,
    error: error
  };
};

export const createTask = (data, sortBy) => {
  return dispatch => {
    dispatch(createTaskStart());
    axios
      .post("/api/v1/tasks", data)
      .then(response => {
        toastr.success("Task Successfully created");
        dispatch(createTaskSuccess(response.data));
      })
      .catch(err => {
        dispatch(createTaskFail(err));
      });
  };
};
export const updateTaskStart = () => {
  return {
    type: actionTypes.UPDATE_TASK_START
  };
};

export const updateTaskSuccess = data => {
  return {
    type: actionTypes.UPDATE_TASK_SUCCESS,
    data: data
  };
};

export const updateTaskFail = error => {
  return {
    type: actionTypes.UPDATE_TASK_FAIL,
    error: error
  };
};

export const updateTask = (data, sortBy) => {
  return dispatch => {
    dispatch(updateTaskStart());
    axios
      .put("/api/v1/tasks/" + data._id, data)
      .then(response => {
        dispatch(updateTaskSuccess(response.data));
        toastr.success("Task Successfully updated");
      })
      .catch(err => {
        dispatch(updateTaskFail(err));
      });
  };
};
export const deleteTaskStart = () => {
  return {
    type: actionTypes.DELETE_TASK_START
  };
};

export const deleteTaskSuccess = data => {
  return {
    type: actionTypes.DELETE_TASK_SUCCESS,
    data: data
  };
};

export const deleteTaskFail = error => {
  return {
    type: actionTypes.DELETE_TASK_FAIL,
    error: error
  };
};

export const deleteTask = id => {
  return dispatch => {
    dispatch(deleteTaskStart());
    axios
      .delete("/api/v1/tasks/" + id)
      .then(response => {
        dispatch(deleteTaskSuccess(response.data));
        toastr.success("Task Successfully deleted");
      })
      .catch(err => {
        dispatch(deleteTaskFail(err));
      });
  };
};

export const newTaskStart = () => {
  return {
    type: actionTypes.NEW_TASK_START
  };
};

export const newTaskSuccess = data => {
  return {
    type: actionTypes.NEW_TASK_SUCCESS,
    data: data
  };
};

export const newTaskFail = error => {
  return {
    type: actionTypes.NEW_TASK_FAIL,
    error: error
  };
};
export const newTask = data => {
  return dispatch => {
    dispatch(newTaskStart());
    dispatch(newTaskSuccess("success"));
    dispatch(newTaskFail("error"));
  };
};
