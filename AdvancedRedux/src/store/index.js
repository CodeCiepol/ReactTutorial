import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore ({
    reducer: {ui: uiSlice.reducer, cart: cartSlice.reducer}
})

// moved to ui-slice.js because we can
// export const uiActions=uiSlice.actions
export default store