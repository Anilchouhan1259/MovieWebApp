import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "./slices/searchSlice";
import {
  searchTermData,
  changeSearchTerm,
  changeShowMovie,
  changeShowRecomendate,
} from "./slices/searchSlice";
import { movieDetail, movieDetailReducer } from "./slices/movieDetailSlice";
const store = configureStore({
  reducer: {
    search: searchReducer,
    movieDetail: movieDetailReducer,
  },
});
export {
  store,
  searchTermData,
  changeSearchTerm,
  changeShowMovie,
  changeShowRecomendate,
  movieDetail,
};
export * from "../thunks/fetchSearchMovie";
export * from "../thunks/showMovie";
export * from "../thunks/fetchSearchMovie";
