import { Router } from "express";
import {
  changeCurrentPassword,
  loginUser,
  loginUserLocal,
  logoutUser,
  refreshAccessToken,
  registerUser,
  registerUserLocal,
  updateAccountDetails,
} from "../controllers/user.controllers.js";
// import { verifyJWT } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.route("/register").post(registerUserLocal);
userRouter.route("/login").post(loginUserLocal);

// AUTH WITH COOKIES
/*
router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

// Secure routes

router.route("/logout").post(verifyJWT, logoutUser);

router.route("/refresh-token").post(refreshAccessToken);

router.route("/change-password").post(verifyJWT, changeCurrentPassword);

router.route("/update-account").patch(verifyJWT, updateAccountDetails);
*/

export default userRouter;
