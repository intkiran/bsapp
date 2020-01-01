import * as actionTypes from "../actions/actionTypes";

const initialState = {
  tasks: [],
  error: null,
  loading: false,
  newInsertedTasks: [],
  newDeletedTasks: []
};
const fetchTasksStart = (state, action) => {
  return {
    ...state,
    error: null,
    tasks: [],
    loading: true,
    success: false
  };
};
const fetchUserTasksSuccess = (state, action) => {
  return {
    ...state,
    error: null,
    loading: false,
    success: true,
    tasks: action.data
  };
};
const fetchUserTasksFail = (state, action) => {
  return { ...state, error: action.error.message, loading: false };
};
const fetchTasksSuccess = (state, action) => {
  return {
    ...state,
    error: null,
    loading: false,
    success: true,
    tasks: action.data
  };
};

const fetchTaskFail = (state, action) => {
  return { ...state, error: action.error.message, loading: false };
};

const fetchTaskStart = (state, action) => {
  return {
    ...state,
    task: {
      ...state.task,
      error: null,
      loading: false,
      success: false
    }
  };
};

const fetchTaskSuccess = (state, action) => {
  return {
    ...state,
    newInsertedTasks: action.data
  };
};

const fetchTasksFail = (state, action) => {
  return {
    ...state,
    task: {
      ...state.task,
      error: action.error,
      loading: false,
      id: action.data._id,
      success: false
    }
  };
};
const newTaskStart = (state, action) => {
  return {
    ...state,
    task: {
      description: "",
      status: "",
      user_id: ""
    },
    error: null,
    loading: true,
    success: false
  };
};

const newTaskSuccess = (state, action) => {
  return {
    ...state,
    task: {
      description: "",
      status: "",
      user_id: ""
    },
    error: null,
    loading: false,
    success: true
  };
};

const newTaskFail = (state, action) => {
  return {
    ...state,
    task: {
      description: "",
      status: "",
      user_id: ""
    },
    error: action.error,
    loading: false,
    success: false
  };
};
const createTaskStart = (state, action) => {
  return {
    ...state,
    error: null,
    loading: false,
    success: false
  };
};

const createTaskSuccess = (state, action) => {
  let tasks = [...state.tasks];
  tasks.unshift(action.data);
  let newInsertedUses = [...state.newInsertedUses];
  newInsertedUses.push(action.data);

  return {
    ...state,
    tasks: tasks,
    loading: false,
    success: true,
    newInsertedTasks: action.data
  };
};

const createTaskFail = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error
  };
};
const updateTaskStart = (state, action) => {
  return {
    ...state,
    error: null,
    loading: false,
    success: false
  };
};

const updateTaskSuccess = (state, action) => {
  let tasks = [...state.tasks];

  for (let key in tasks) {
    if (tasks[key]._id === action.data._id) {
      let update = { ...tasks[key] };
      update = action.data;
      tasks[key] = update;
    }
  }

  return {
    ...state,
    tasks: tasks,
    loading: false,
    success: true,
    newInsertedTasks: action.data
  };
};

const updateTaskFail = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error
  };
};

const deleteTaskStart = (state, action) => {
  return {
    ...state,
    error: null,
    loading: false,
    success: false
  };
};

const deleteTaskSuccess = (state, action) => {
  let tasks = [...state.tasks];
  let deletedTask = tasks.find(function(task) {
    return task._id === action.data._id;
  });
  let updatedTasks = tasks.filter(function(task) {
    return task._id !== action.data._id;
  });
  let newDeletedTasks = [...state.newDeletedTasks];
  newDeletedTasks.push(deletedTask);
  return {
    ...state,
    tasks: updatedTasks,
    error: null,
    success: true,
    task: {
      ...state.task,
      updateError: null,
      updateLoading: false,
      _id: action.data._id,
      success: false
    },
    newDeletedTasks: newDeletedTasks
  };
};

const deleteTaskFail = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TASKS_START:
      return fetchTasksStart(state, action);
    case actionTypes.FETCH_TASKS_SUCCESS:
      return fetchTasksSuccess(state, action);
    case actionTypes.FETCH_TASKS_FAIL:
      return fetchTasksFail(state, action);
    case actionTypes.CREATE_TASK_START:
      return createTaskStart(state, action);
    case actionTypes.CREATE_TASK_SUCCESS:
      return createTaskSuccess(state, action);
    case actionTypes.CREATE_TASK_FAIL:
      return createTaskFail(state, action);
    case actionTypes.UPDATE_TASK_START:
      return updateTaskStart(state, action);
    case actionTypes.UPDATE_TASK_SUCCESS:
      return updateTaskSuccess(state, action);
    case actionTypes.UPDATE_TASK_FAIL:
      return updateTaskFail(state, action);
    case actionTypes.DELETE_TASK_START:
      return deleteTaskStart(state, action);
    case actionTypes.DELETE_TASK_SUCCESS:
      return deleteTaskSuccess(state, action);
    case actionTypes.DELETE_TASK_FAIL:
      return deleteTaskFail(state, action);
    case actionTypes.NEW_TASK_START:
      return newTaskStart(state, action);
    case actionTypes.NEW_TASK_SUCCESS:
      return newTaskSuccess(state, action);
    case actionTypes.NEW_TASK_FAIL:
      return newTaskFail(state, action);
    case actionTypes.FETCH_TASK_START:
      return fetchTaskStart(state, action);
    case actionTypes.FETCH_TASK_SUCCESS:
      return fetchTaskSuccess(state, action);
    case actionTypes.FETCH_TASK_FAIL:
      return fetchTaskFail(state, action);
    case actionTypes.FETCH_USERTASKS_SUCCESS:
      return fetchUserTasksSuccess(state, action);
    case actionTypes.FETCH_USERTASKS_FAIL:
      return fetchUserTasksFail(state, action);
    default:
      return state;
  }
};

export default reducer;
