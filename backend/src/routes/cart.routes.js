import express, { Router } from "express";
import {
  addToCart,
  getCartList,
  removeFromCart,
} from "../controllers/cart.controllers.js";
import { verifyJWT } from "../middlewares/authLocal.middlewares.js";

const cartRouter = Router();

cartRouter.route("/add-cart").post(verifyJWT, addToCart);
cartRouter.route("/remove-cart").post(verifyJWT, removeFromCart);
cartRouter.route("/get-cart").post(verifyJWT, getCartList);

export default cartRouter;
