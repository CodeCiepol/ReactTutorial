import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import counterSlice from './counterSlice'

//THIS IS REDUX TOOLKIT VERSION, FOR REDUX VANILA GO DOWN

const store = configureStore({
  //creating map of reducers:
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
  // reducer: counterSlice.reducer
})

export const counterActions = counterSlice.actions //this will create action objects with "type" property like in vanila reducer
export const authActions = authSlice.actions //this will create action objects with "type" property like in vanila reducer

export default store

/* VERSION WITHOUT REDUX TOOLKIT:*/

//import { legacy_createStore as createStore } from 'redux'

// const initialState = { counter: 0, showCounter: true }

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     //you are not allowed to mutate STATE!
//     return { counter: state.counter + 1, showCounter: state.showCounter }
//     // object will not be added, its replacing existing object
//   }

//   if (action.type === 'increase') {
//     return { counter: state.counter + action.amount }
//   }

//   if (action.type === 'decrement') {
//     return { counter: state.counter - 1, showCounter: state.showCounter }
//   }

//   if (action.type === 'toggle') {
//     return { counter: state.counter, showCounter: !state.showCounter }
//   }

//   return state
// }

// const store = createStore(counterReducer)

// export default store
