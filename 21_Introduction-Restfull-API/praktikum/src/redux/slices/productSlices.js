import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const products = [
  {
    id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
    productName: "John",
    productCategory: "Doe",
    productFreshness: "Doe",
    productPrice: "234",
    image: "Doe",
    additionalDescription: "Doe",
  },
];

export const productSlices = createSlice({
  name: "Product",
  initialState: products,
  reducers: {
    addProduct(state, action) {
      const { payload } = action;
      const id = uuidv4();
      const newProduct = {
        id: id,
        productName: payload.productName,
        productCategory: payload.productCategory,
        productFreshness: payload.productFreshness,
        productPrice: payload.productPrice,
        productImage: payload.productImage,
      };
      return [...state, newProduct];
    },
    editProduct: (state, action) => {
      const { payload } = action;
      const index = state.products.findIndex(
        (product) => product.id === payload.id
      );
      if (index !== -1) {
        state.products[index] = {
          ...state.products[index],
          productName: payload.productName,
          productPrice: payload.productPrice,
        };
      }
    },
    deleteProduct(state, action) {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addProduct, editProduct, deleteProduct } = productSlices.actions;
export default productSlices.reducer;
