import express from "express";
const router = express.Router();
import { protect, admin } from "../MiddleWare/authMiddleware.js";
import {
  authUser,
  updateProfileUser,
  getUserbyId,
  getUserProfile,
  getUsers,
  deleteUser,
  updateUser,
  registerUser,
  logoutUser,
} from "../Controller/userController.js";

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/logout",logoutUser);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateProfileUser);
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserbyId)
  .put(protect, admin, updateUser);

export default router;
