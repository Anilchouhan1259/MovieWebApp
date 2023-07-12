import SearchMovie from "./components/searchmovie/SearchMovie";
import Header from "./components/header/Header";
import MovieDetail from "./components/moviedetail/MovieDetails";
import MovieList from "./components/movieList/MovieList";
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
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
