import { Router } from "express";

import {
  registerUser,
  loginUser,
  LogoutUser,
} from "../controllers/user.controller.js";
// import { protect } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/signup", registerUser);

router.post("/login", loginUser);

router.post("/logout", LogoutUser);

// router.get("/profile", protect, getUserProfile);

export default router;
