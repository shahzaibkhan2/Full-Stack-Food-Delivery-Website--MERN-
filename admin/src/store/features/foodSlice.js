import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { envVars } from "../../config/config";
import { toast } from "react-toastify";

export const fetchFoodList = createAsyncThunk("fetchFoodList", async () => {
  const response = await axios.get(`${envVars.serverUri}/food-list`);

  if (response.data.success) {
    return response.data.data;
  } else {
    toast.error("Sorry ! Internal server error.");
    return null;
  }
});

export const removeFood = createAsyncThunk("removeFood", async (id) => {
  const response = await axios.post(`${envVars.serverUri}/remove-food`, {
    id,
  });

  if (response.data.success) {
    toast.success("Food removed successfully !");
  } else {
    toast.error("Sorry ! Internal server error.");
  }
});

const foodSlice = createSlice({
  name: "food",
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFoodList.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const foodActions = foodSlice.actions;
export default foodSlice;
