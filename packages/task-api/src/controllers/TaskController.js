import * as TaskService from "../services/TaskService";
import Task from "../models/Task";

export const getTasks = async (req, res) => {

  try {
    const result = await TaskService.getAllTasks();

    return res.send(result);
  } catch (error) {
    return res.status(422).json({
      error: error.message,
      status: "failed"
    });
  }
};
export const createTask = async (req, res) => {
  try {
    const task = req.body;
    const result = await TaskService.addTask(task);
    return res.send(result);
  } catch (error) {
    return res.status(422).json({
      error: error.message,
      status: "failed"
    });
  }
};
export const getTask = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await TaskService.getTask(id);

    return res.send(result);
  } catch (error) {
    return res.status(422).json({
      error: error.message,
      status: "failed"
    });
  }
};
export const getUserTasks = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await TaskService.getUserTasks(id);

    return res.send(result);
  } catch (error) {
    return res.status(422).json({
      error: error.message,
      status: "failed"
    });
  }
};
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await TaskService.getTask(id);
    if (!task) {
      return res.status(404).json({
        error: "task not found",
        status: "failed"
      });
    }
    const { description, state, user_id } = req.body;

    let newTask = new Task({
      description: description,
      state: state,
      user_id: user_id,
      _id: id
    });

    const updatedTask = await TaskService.updateTask(newTask);
    return res.send(updatedTask);
  } catch (error) {
    return res.status(422).json({
      error: error.message,
      status: "failed"
    });
  }
};
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await TaskService.getTask(id);
    if (!task) {
      return res.status(404).json({
        error: "task not found",
        status: "failed"
      });
    }
    const result = await TaskService.deleteTask(id);
    return res.send(result);
  } catch (error) {
    return res.status(422).json({
      error: error.message,
      status: "failed"
    });
  }
};
