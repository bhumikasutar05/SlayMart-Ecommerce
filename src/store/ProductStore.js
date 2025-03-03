import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Slice/ProductSlice";
import authReducer from "../Slice/AuthSlice";

let store = configureStore({
  reducer: {
    productInfo: productReducer,
    auth: authReducer,
  },
});

export default store;
