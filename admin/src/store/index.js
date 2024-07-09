import { configureStore } from "@reduxjs/toolkit";
import statesSlice from "./features/statesSlice";
import foodSlice from "./features/foodSlice";

const mainStore = configureStore({
  reducer: {
    states: statesSlice.reducer,
    food: foodSlice.reducer,
  },
});

export default mainStore;
