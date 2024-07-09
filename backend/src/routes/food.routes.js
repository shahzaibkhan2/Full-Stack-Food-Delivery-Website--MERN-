import express, { Router } from "express";
import {
  addFood,
  getFoodList,
  removeFood,
} from "../controllers/food.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";

const foodRouter = Router();

foodRouter.route("/add-food").post(upload.single("image"), addFood);
foodRouter.route("/food-list").get(getFoodList);
foodRouter.route("/remove-food").post(removeFood);

export default foodRouter;
