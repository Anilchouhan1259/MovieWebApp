import "./searchMovie.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm, fetchSearchMovie, showMovie } from "../../store";
import SearchmovieRecomendation from "../recomendation/SearchmovieRecomendation";
import Card from "../card/Card";
function SearchMovie() {
  const dispatch = useDispatch();
  // changing input element
  const handleChange = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };
  //on form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(showMovie(searchTerm));
  };
  //fetching data from redux store
  const {
    showRecomendation,
    isshowMovie,
    searchTerm,
    showMovieData,
    recomendateMovieData,
  } = useSelector((state) => {
    return state.search;
  });
  useEffect(() => {
    console.log("running");
    dispatch(fetchSearchMovie(searchTerm));
  }, [dispatch, searchTerm]);
  console.log(showMovieData);
  console.log(recomendateMovieData);
  return (
    <>
      <div className="searchBar">
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <input
              className="search"
              value={searchTerm}
              onChange={handleChange}
            />
            <button className="button"> search..</button>
          </div>
        </form>
      </div>
      {showRecomendation && (
        <SearchmovieRecomendation data={recomendateMovieData} />
      )}
      {isshowMovie && <Card movies={showMovieData} />}
    </>
  );
}
export default SearchMovie;
