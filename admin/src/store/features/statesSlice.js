import { createSlice } from "@reduxjs/toolkit";
const statesSlice = createSlice({
  name: "states",
  initialState: { image: false },
  reducers: {
    setImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const statesActions = statesSlice.actions;
export default statesSlice;
