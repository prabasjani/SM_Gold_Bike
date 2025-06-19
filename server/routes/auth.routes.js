import express from "express";
import {
  checkAuth,
  login,
  logout,
  signUp,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/check-auth", checkAuth);
router.post("/signup", signUp);
router.post("/login", login);
router.post("/logout", logout);

export { router as AuthRouter };
