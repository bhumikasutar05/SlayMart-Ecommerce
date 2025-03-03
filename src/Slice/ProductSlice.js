import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishList: [],
  cart: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addWishList: (state, action) => {
      state.wishList.push(action.payload);
    },
    removeWishList: (state, action) => {
      state.wishList = state.wishList.filter(
        (product) => product["Unnamed: 0"] !== action.payload
      );
    },
    addCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item["Unnamed: 0"] === action.payload["Unnamed: 0"]
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    updateCartQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((product) => product["Unnamed: 0"] === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },

    removeCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product["Unnamed: 0"] !== action.payload
      );
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addWishList,
  removeWishList,
  addCart,
  updateCartQuantity,
  removeCart,
  clearCart,
} = productSlice.actions;

export default productSlice.reducer;
