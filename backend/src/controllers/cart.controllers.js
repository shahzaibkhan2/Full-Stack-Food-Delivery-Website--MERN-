import { User } from "../models/user.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const addToCart = asyncHandler(async (req, res) => {
  const { id } = req.body;
  let user = await User.findById(req.user._id);

  let cartData = await user.cartData;

  if (!cartData) {
    throw new ApiError(400, "User not found.");
  }

  if (!cartData[id]) {
    cartData[id] = 1;
  } else {
    cartData[id] += 1;
  }

  await User.findByIdAndUpdate(req.user._id, {
    cartData,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Item added to cart successfully !"));
});

const removeFromCart = asyncHandler(async (req, res) => {
  const { id } = req.body;
  const user = await User.findById(req.user._id);

  if (!user) {
    throw new ApiError(400, "User not found.");
  }

  const cartData = await user.cartData;

  if (!cartData) {
    throw new ApiError(400, "Data not found.");
  }

  if (cartData[id] > 0) {
    cartData[id] -= 1;
  }

  await User.findByIdAndUpdate(req.user._id, {
    cartData,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Cart item removed successfully !"));
});

const getCartList = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    throw new ApiError(400, "User not found.");
  }

  const cartData = await user.cartData;

  if (!cartData) {
    throw new ApiError(
      400,
      "Cart items fetch failed due to internal server error."
    );
  }

  return res
    .status(200)
    .json(new ApiResponse(200, cartData, "Cart items fetched successfully !"));
});

export { addToCart, removeFromCart, getCartList };
