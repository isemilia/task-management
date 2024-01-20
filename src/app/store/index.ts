import { configureStore } from '@reduxjs/toolkit'

import { authSlice, globalSlice } from '@/shared/redux'
import { api } from '@/shared/api/base'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    global: globalSlice,
    auth: authSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch