import { createSlice } from "@reduxjs/toolkit";

const statesSlice = createSlice({
  name: "states",
  initialState: {
    menu: "home",
    category: "All",
    showLogin: false,
    currentState: "Sign Up",
    accessToken: "",
    isSticky: false,
  },
  reducers: {
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setShowLogin: (state, action) => {
      state.showLogin = action.payload;
    },
    setCurrentState: (state, action) => {
      state.currentState = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setIsSticky: (state, action) => {
      state.isSticky = action.payload;
    },
  },
});

export const stateActions = statesSlice.actions;
export default statesSlice;
