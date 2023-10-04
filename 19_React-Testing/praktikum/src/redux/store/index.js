import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productSlices";

export default configureStore({
  reducer: {
    products: productReducer,
  },
});
