import { log } from "console";
import { Food } from "../models/food.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import fs from "fs";

// ADDING FOOD ITEMS TO THE DATABASE
const addFood = asyncHandler(async (req, res) => {
  let image = `${req.file.filename}`;

  if (!image) {
    throw new ApiError(400, "Image is missing.");
  }

  const { name, description, price, category } = req.body;

  if ([name, description, category].some((field) => field?.trim() === "")) {
    throw new ApiError(
      400,
      "All fields are required since one of them is empty !!!!"
    );
  }

  if (!price) {
    throw new ApiError(400, "All fields are required !!!!");
  }

  const food = await Food.create({
    name,
    description,
    price,
    category,
    image,
  });

  if (!food) {
    throw new ApiError(500, "Food addition failed due to server error.");
  }

  await food.save();

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Food added successfully !"));
});

// GET FOOD LIST
const getFoodList = asyncHandler(async (_, res) => {
  const food = await Food.find({});

  if (!food) {
    throw new ApiError(500, "Sorry ! Internal server error.");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, food, "Food list fetched successfully !"));
});

// REMOVE FOOD ITEM
const removeFood = asyncHandler(async (req, res) => {
  const { id } = req.body;
  if (!id) {
    throw new ApiError(400, "Id is missing.");
  }

  const food = await Food.findById(id);

  if (!food) {
    throw new ApiError(400, "food id missing.");
  }

  fs.unlink(`src/uploads/${food.image}`, (err) => {
    if (err) {
      console.log("Error: ", err);
    } else {
      console.log("File deleted successfully !");
    }
  });

  await Food.findByIdAndDelete(req.body.id);

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Food item removed successfully !"));
});

export { addFood, getFoodList, removeFood };
