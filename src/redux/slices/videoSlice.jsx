import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  videos: [],
  selectedVideo: null,
};

const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    setVideos: (state, action) => {
      state.videos = action.payload;
    },
    selectVideo: (state, action) => {
      state.selectedVideo = action.payload;
    },
  },
});

export const { setVideos, selectVideo } = videoSlice.actions;
export default videoSlice.reducer;