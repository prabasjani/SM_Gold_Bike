import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now(),
    },
    profilePic: String,
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("user", UserSchema);
