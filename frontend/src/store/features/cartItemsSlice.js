import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { envVars } from "../../config/config";

export const fetchFoodList = createAsyncThunk("fetchFoodList", async () => {
  const response = await axios.get(`${envVars.foodServerUri}/food-list`);

  if (response.data.success) {
    return response.data.data;
  } else {
    console.log("Food list fetch failed.");
  }
});

export const fetchCartList = createAsyncThunk(
  "fetchCartList",
  async (accessToken) => {
    const response = await axios.post(
      `${envVars.cartServerUri}/get-cart`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (response.data.success) {
      return response.data.data;
    } else {
      console.error("data not fetched due to internal server error.");
    }
  }
);

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: { cartItems: {}, totalAmount: 0, foodList: [] },
  extraReducers: (builder) => {
    builder.addCase(fetchFoodList.fulfilled, (state, action) => {
      state.foodList = action.payload;
    });
    builder.addCase(fetchCartList.fulfilled, (state, action) => {
      state.cartItems = action.payload;
    });
  },
  reducers: {
    addToCart: (state, action) => {
      if (!state.cartItems[action.payload]) {
        state.cartItems = { ...state.cartItems, [action.payload]: 1 };
      } else {
        state.cartItems = {
          ...state.cartItems,
          [action.payload]: state.cartItems[action.payload] + 1,
        };
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = {
        ...state.cartItems,
        [action.payload]: state.cartItems[action.payload] - 1,
      };
    },
    getTotalCartAmount: (state, _) => {
      let tempTotalAmount = 0;
      for (const item in state.cartItems) {
        if (state.cartItems[item] > 0) {
          let itemInfo = state.foodList.find((product) => product._id === item);
          if (itemInfo) {
            tempTotalAmount += itemInfo.price * state.cartItems[item];
          }
        }
      }
      state.totalAmount = tempTotalAmount;
    },
  },
});

export const cartItemsActions = cartItemsSlice.actions;
export default cartItemsSlice;
