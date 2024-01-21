import { configureStore } from '@reduxjs/toolkit'

import { globalSlice } from '@/shared/redux'
import { api } from '@/shared/api/base'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    global: globalSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch