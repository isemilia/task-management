import { configureStore } from '@reduxjs/toolkit'

import { authSlice, globalSlice } from '@/shared/redux'

export const store = configureStore({
  reducer: {
    global: globalSlice,
    auth: authSlice
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch