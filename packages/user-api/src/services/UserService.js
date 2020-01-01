import User from "../models/User";
import apiError from "../utils/apiError";

export const getUser = async id => {
  let existingUser = null;
  const user = await User.findById(id, function(err, user) {
    if (err) throw new apiError("unable to find user.", 500);
    existingUser = user;
  });
  return existingUser;
};

export const getAllUsers = async () => {
  return User.find({}).exec();
};

export const addUser = async user => {
  let newUser = new User({
    name: user.name
  });
  let addedUser = await newUser.save();
  return addedUser;
};

export const updateUser = async user => {
  let userr = null;
  await User.findOneAndUpdate(
    { _id: user._id },
    { $set: user },
    { new: true },
    function(err, newUpdatedUser) {
      if (err) throw new apiError("unable to updated user.", 500);
      userr = newUpdatedUser;
    }
  );

  return userr;
};

export const deleteUser = async id => {
  let deleteUser = null;
  await User.findByIdAndDelete(id, (err, user) => {
    if (err) throw new apiError("unable to delete user.", 500);
    deleteUser = user;
  });
  return deleteUser;
};
