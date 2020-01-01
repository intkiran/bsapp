import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minLength: 3
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", UserSchema);
export default User;
