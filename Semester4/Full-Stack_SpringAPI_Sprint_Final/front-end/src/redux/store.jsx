import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/shoppingCart/redux/cartSlice";
import userReducer from "../features/authentication/redux/userSlice";
import globalReducer from "./globalSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    globalStore: globalReducer,
  },
});

export default store;
