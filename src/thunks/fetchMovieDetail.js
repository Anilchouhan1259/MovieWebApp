import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const fetchMovieDetail = createAsyncThunk("moviedetail/fetch", async (arg) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${arg}?api_key=dedf3e9c0be1fa2a03d9d868d1c379b2&language=en-US`
  );
  return response.data;
});
export { fetchMovieDetail };
