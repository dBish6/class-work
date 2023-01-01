import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  products: [],
  subtotal: 0,
  taxRate: 0.08,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      // Payload is whatever coming in.
      const productIndex = state.products.findIndex(
        (sword) => sword.sword_id === action.payload.sword_id
      );
      // Finds if the product is already in the cart.
      if (productIndex >= 0) {
        state.products[productIndex].quantity++;
        toast.info(`Added another ${state.products[productIndex].name}`, {
          position: "bottom-left",
          theme: "dark",
        });
      } else {
        const newProduct = { ...action.payload, quantity: 1 };
        state.products.push(newProduct);
        toast.success(`${action.payload.name} added to cart!`, {
          position: "bottom-left",
          theme: "dark",
        });
      }
    },
    REMOVE_FROM_CART: (state, action) => {
      state.products = state.products.filter(
        (sword) => sword.sword_id !== action.payload.sword_id
      );
      toast.error(`${action.payload.name} was removed`, {
        position: "bottom-left",
        theme: "dark",
      });
    },
    INCREASE_QUANTITY: (state, action) => {
      const productIndex = state.products.findIndex(
        (sword) => sword.sword_id === action.payload.sword_id
      );

      state.products[productIndex].quantity = action.payload.quantity + 1;
      toast.info(`Added another ${state.products[productIndex].name}`, {
        position: "bottom-left",
        theme: "dark",
      });
    },
    DECREASE_QUANTITY: (state, action) => {
      const productIndex = state.products.findIndex(
        (sword) => sword.sword_id === action.payload.sword_id
      );

      if (state.products[productIndex].quantity > 1) {
        state.products[productIndex].quantity = action.payload.quantity - 1;
        toast.info(
          `${state.products[productIndex].name}'s quantity increased`,
          {
            position: "bottom-left",
            theme: "dark",
          }
        );
      } else {
        state.products.splice(productIndex, 1);
        toast.error(`${action.payload.name} was removed`, {
          position: "bottom-left",
          theme: "dark",
        });
      }
    },
    CLEAR_CART: (state) => {
      state.products = [];
      toast.error(`All items removed`, {
        position: "bottom-left",
        theme: "dark",
      });
    },
    ON_SUBMIT_ORDER: (state) => {
      state.products = [];
    },
  },
});

// Action creators are generated for each case reducer function.
export const {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_CART,
  ON_SUBMIT_ORDER,
} = cartSlice.actions;
// Exports the slice's reducer.
export default cartSlice.reducer;
