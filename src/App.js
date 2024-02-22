import SearchMovie from "./components/searchmovie/SearchMovie";
import Navbar from "./components/header/Navbar";
import MovieDetail from "./components/moviedetail/MovieDetails";
import MovieList from "./components/movieList/MovieList";
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app font-mono">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<SearchMovie />}></Route>
          <Route path="movie/:id" element={<MovieDetail />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
