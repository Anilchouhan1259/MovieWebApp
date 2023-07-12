import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const fetchSearchMovie = createAsyncThunk("search/fetch", async (arg) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${arg}&api_key=dedf3e9c0be1fa2a03d9d868d1c379b2`
  );
  return response.data.results;
});
export { fetchSearchMovie };
