import { createSlice } from '@reduxjs/toolkit'

const podcatsSlice = createSlice({
  name: 'podcasts',
  initialState: {
    podcasts: [],
    selectedPodcast: {},
    selectedEpisode: {},
    selectedPodcastDetail: {},
  },
  reducers: {
    savePodcasts: (state, action) => {
      state.podcasts = action.payload
    },
    saveSelectedPodcast: (state, action) => {
      state.selectedPodcast = action.payload
    },
    saveSelectedEpisode: (state, action) => {
      state.selectedEpisode = action.payload
    },
    savePodcastDetail: (state, action) => {
      state.selectedPodcastDetail = action.payload
    },
  },
})

export const {
  savePodcasts,
  savePodcastDetail,
  saveSelectedPodcast,
  saveSelectedEpisode,
} = podcatsSlice.actions

export default podcatsSlice.reducer
