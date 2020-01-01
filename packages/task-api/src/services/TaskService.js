import Task from "../models/Task";
import apiError from "../utils/apiError";

export const getTask = async id => {
  let existingTask = null;
  const user = await Task.findById(id, function(err, task) {
    if (err) throw new apiError("unable to find user.", 500);
    existingTask = task;
  });
  return existingTask;
};
export const getUserTasks = async id => {
  let existingTask = null;
  const user = await Task.find({ user_id: id }, function(err, task) {
    if (err) throw new apiError("unable to find user.", 500);
    existingTask = task;
  });
  return existingTask;
};
export const getAllTasks = async () => {
  return Task.find({}).exec();
};

export const addTask = async task => {
  let newTask = new Task({
    description: task.description,
    state: task.state,
    user_id: task.user_id
  });
  let addedTask = await newTask.save();
  return addedTask;
};

export const updateTask = async task => {
  let taskk = null;
  await Task.findOneAndUpdate(
    { _id: task._id },
    { $set: task },
    { new: true },
    function(err, newUpdatedTask) {
      if (err) throw new apiError("unable to updated task.", 500);
      taskk = newUpdatedTask;
    }
  );

  return taskk;
};

export const deleteTask = async id => {
  let deleteTask = null;
  await Task.findByIdAndDelete(id, (err, task) => {
    if (err) throw new apiError("unable to delete task.", 500);
    deleteTask = task;
  });
  return deleteTask;
};
