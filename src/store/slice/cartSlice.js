import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DetailProducts } from "../../Services/CategoryServices";
import { json } from "react-router-dom";

const getItemInStorage = (data) => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  Cart: getItemInStorage(),
};

const storeLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const CartSlice = createSlice({
  name: "CartSlice",

  initialState,

  reducers: {
    addCart: (state, action) => {
      let existingCart = state.Cart.find(
        (item) => item.id == action.payload.id
      );

      if (existingCart) {
        const tempCart = state.Cart.map((item) => {
          if (item.id === action.payload.id) {
            let tempQty = item.quantity + action.payload.quantity;
            let totalPrice = item.price * tempQty;

            return {
              ...item,
              quantity: tempQty,
              totalPrice: totalPrice,
            };
          } else {
            return item;
          }
        });

        state.Cart = tempCart;
      } else {
        state.Cart.push(action.payload);
        storeLocalStorage(state.Cart);
      }
    },

    clearCart: (state, action) => {
      state.Cart = [];
      storeLocalStorage(state.Cart);
    },
  },
});

export const { addCart, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
