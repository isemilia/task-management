import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface InitState {
  user: {
    id: string
    name: string
    username: string
  } | null
  token: string
}

const initialState: InitState = {
  user: null,
  token: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<InitState['token']>) => {
      state.token = action.payload
    },
    setUser: (state, action: PayloadAction<InitState['user']>) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null;
      state.token = '';
    }
  },
})

export const { setToken, setUser } = authSlice.actions

export default authSlice.reducer