import { createSlice } from '@reduxjs/toolkit'

const initialUiState = { showCart: false, notification: null }

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUiState,
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      }
  console.log(state.notification)
    },
  },
})

export const uiActions = uiSlice.actions

export default uiSlice
