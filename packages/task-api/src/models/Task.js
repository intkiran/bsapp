import mongoose, { Schema, model } from "mongoose";

const TaskSchema = new Schema(
  {
    description: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    user_id: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Task = mongoose.model("Task", TaskSchema);
export default Task;
