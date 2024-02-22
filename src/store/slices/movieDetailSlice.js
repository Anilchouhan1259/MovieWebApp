import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieDetail } from "../../thunks/fetchMovieDetail";
const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState: {
    isLoading: false,
    movieDetail: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovieDetail.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovieDetail.fulfilled, (state, action) => {
      state.movieDetail = action.payload;
      state.isLoading = false;
    });
  },
});
export const { movieDetail } = movieDetailSlice.actions;
export const movieDetailReducer = movieDetailSlice.reducer;
