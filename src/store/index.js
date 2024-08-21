import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../Slicers/todoSlice"

export const store = configureStore({
   reducer: {
      todo: todoReducer,
      
   },
})