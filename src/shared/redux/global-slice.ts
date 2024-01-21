import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store/'

const initialState = {
  value: 0
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setState: (state) => {
      state.value = 1 // temporary 
    }
  },
})

export const { setState } = globalSlice.actions

// export const global = (state: RootState) => state.global.value

export default globalSlice.reducer