import express from "express";
import * as taskController from "../controllers/TaskController";

const Router = express.Router();

Router.post("/", taskController.createTask);
Router.get("/", taskController.getTasks);
Router.get("/:id?", taskController.getTask);
Router.get("/users/:id?", taskController.getUserTasks);
Router.put("/:id", taskController.updateTask);
Router.delete("/:id", taskController.deleteTask);

export default Router;
