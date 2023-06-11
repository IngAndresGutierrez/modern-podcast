import { createSlice } from '@reduxjs/toolkit'

const podcatsSlice = createSlice({
  name: 'podcasts',
  initialState: {
    podcasts: [],
  },
  reducers: {
    savePodcasts: (state, action) => {
      state.podcasts = action.payload
    },
  },
})

export const { savePodcasts } = podcatsSlice.actions

export default podcatsSlice.reducer
