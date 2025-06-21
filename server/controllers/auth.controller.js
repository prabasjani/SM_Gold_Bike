import bcrypt from "bcrypt";

// Local Imports
import { UserModel } from "../models/Auth.js";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

export const checkAuth = async (req, res) => {};

export const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User Already Exists!" });
    }

    const hashedPwd = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      username,
      email,
      password: hashedPwd,
    });

    await newUser.save();

    // Generete the Token and set the cookie
    generateTokenAndSetCookie(res, newUser._id);

    res
      .status(201)
      .json({ success: true, message: "New User Registered Successfully" });
  } catch (error) {
    console.log(`SignUp Error: ${error.message}`);
    res.status(500).json({ success: false, message: "Internal Server Error!" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User Not Found!" });
    }

    const verifyPwd = await bcrypt.compare(password, user.password);

    if (!verifyPwd) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect Credentials!" });
    }

    generateTokenAndSetCookie(res, user._id);

    user.lastLogin = new Date();
    await user.save();

    res.status(200).json({
      success: true,
      message: `Welcome Mr.${user.username?.toUpperCase()}`,
    });
  } catch (error) {
    console.log(`Login Error: ${error.message}`);
    res.status(500).json({ success: false, message: "Internal Server Error!" });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ success: true, message: "Logged Out Successfull" });
};
