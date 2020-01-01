import * as UserService from "../services/UserService";
import User from "../models/User";

export const getUsers = async (req, res) => {
  try {
    const result = await UserService.getAllUsers();
    return res.send(result);
  } catch (error) {
    return res.status(422).json({
      error: error.message,
      status: "failed"
    });
  }
};
export const createUser = async (req, res) => {
  try {
    const user = req.body;
    const result = await UserService.addUser(user);
    return res.send(result);
  } catch (error) {
    return res.status(422).json({
      error: error.message,
      status: "failed"
    });
  }
};
export const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await UserService.getUser(id);

    return res.send(result);
  } catch (error) {
    return res.status(422).json({
      error: error.message,
      status: "failed"
    });
  }
};
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.getUser(id);
    if (!user) {
      return res.status(404).json({
        error: "user not found",
        status: "failed"
      });
    }
    const { name } = req.body;

    let newUser = new User({
      name: name,
      _id: id
    });

    const updatedUser = await UserService.updateUser(newUser);
    return res.send(updatedUser);
  } catch (error) {
    return res.status(422).json({
      error: error.message,
      status: "failed"
    });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.getUser(id);
    if (!user) {
      return res.status(404).json({
        error: "user not found",
        status: "failed"
      });
    }
    const result = await UserService.deleteUser(id);
    return res.send(result);
  } catch (error) {
    return res.status(422).json({
      error: error.message,
      status: "failed"
    });
  }
};
