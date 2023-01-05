import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { showCart: false };

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
      toggle(state) {
        state.showCart = !state.showCart;
      },
    },
  });
export default cartSlice