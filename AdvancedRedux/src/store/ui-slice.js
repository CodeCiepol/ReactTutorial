import { createSlice } from "@reduxjs/toolkit";

const initialUiState = { showCart: false };

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUiState,
    reducers: {
      toggle(state) {
        state.showCart = !state.showCart;
      },
    },
  });
export default uiSlice