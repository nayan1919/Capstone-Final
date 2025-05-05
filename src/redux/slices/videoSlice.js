// src/store/videoSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../api/axios'; // adjust path if needed

// Async thunk to fetch videos
export const fetchVideos = createAsyncThunk('videos/fetchVideos', async () => {
  const res = await axios.get('/videos'); // Assumes backend has GET /api/videos
  return res.data;
});

const videoSlice = createSlice({
  name: 'videos',
  initialState: {
    videos: [],
    selectedVideo: null,
    loading: false,
    error: null,
  },
  reducers: {
    selectVideo: (state, action) => {
      state.selectedVideo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { selectVideo } = videoSlice.actions;
export default videoSlice.reducer;
