import express from "express";
import * as userController from "../controllers/UserController";

const Router = express.Router();

Router.post("/", userController.createUser);
Router.get("/", userController.getUsers);
Router.get("/:id?", userController.getUser);
Router.put("/:id", userController.updateUser);
Router.delete("/:id", userController.deleteUser);

export default Router;
