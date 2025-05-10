// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from '../../api/axios'; // Import your Axios instance

// // ✅ Async thunk to fetch videos
// export const fetchVideos = createAsyncThunk('videos/fetchVideos', async () => {
//   const res = await axios.get('/videos'); // Token is automatically attached
//   return res.data;
// });

// const initialState = {
//   videos: [],
//   selectedVideo: null,
//   loading: false,
//   error: null,
// };

// const videoSlice = createSlice({
//   name: 'videos',
//   initialState,
//   reducers: {
//     selectVideo: (state, action) => {
//       state.selectedVideo = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchVideos.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchVideos.fulfilled, (state, action) => {
//         state.loading = false;
//         state.videos = action.payload;
//       })
//       .addCase(fetchVideos.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export const { selectVideo } = videoSlice.actions;
// export default videoSlice.reducer;
