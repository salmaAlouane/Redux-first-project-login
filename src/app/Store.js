import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../feautures/userSlice'

export const store = configureStore({
    reducer: {
      user: userSlice,
    },
  })