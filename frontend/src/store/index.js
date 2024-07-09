import { configureStore } from "@reduxjs/toolkit";
import cartItemsSlice from "./features/cartItemsSlice";
import statesSlice from "./features/statesSlice";

const mainStore = configureStore({
  reducer: {
    cartItems: cartItemsSlice.reducer,
    states: statesSlice.reducer,
  },
});

export default mainStore;
