import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchMovie } from "../../thunks/fetchSearchMovie";
import { showMovie } from "../../thunks/showMovie";
import { fetchMovieList } from "../../thunks/fetchMovieList";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showRecomendation: true,
    isshowMovie: false,
    searchTerm: "",
    recomendateMovieData: [],
    showMovieData: [],
    movieList: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.showRecomendation = true;
    },
    changeShowRecomendate(state, action) {
      state.showRecomendation = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSearchMovie.fulfilled, (state, action) => {
      state.recomendateMovieData = action.payload;
    });
    builder.addCase(showMovie.fulfilled, (state, action) => {
      state.isshowMovie = true;
      state.showRecomendation = false;
      state.showMovieData = action.payload;
    });
    builder.addCase(fetchMovieList.fulfilled, (state, action) => {
      console.log(action.payload);
      state.movieList = action.payload;
    });
  },
});
export const {
  changeSearchTerm,
  searchTermData,
  changeShowMovie,
  changeShowRecomendate,
} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
