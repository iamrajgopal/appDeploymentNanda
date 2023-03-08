import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reduxSlice/counterSlice'

export const store = configureStore({
  reducer: {
    counter:counterSlice
  },
})