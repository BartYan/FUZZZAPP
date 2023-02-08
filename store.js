import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import chordsReducer from './slices/chordsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    chordsSlice: chordsReducer
  },
})