import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const fetchMovieList = createAsyncThunk("movieList/fetch", async (arg) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${
      arg ? arg : "popular"
    }?api_key=dedf3e9c0be1fa2a03d9d868d1c379b2&language=en-US&page=1`
  );
  return response.data.results;
});
export { fetchMovieList };
