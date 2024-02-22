import "./searchMovie.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm, fetchSearchMovie, showMovie } from "../../store";
import SearchmovieRecomendation from "../recomendation/SearchmovieRecomendation";
import Card from "../card/Card";
import { FaSearch } from "react-icons/fa";

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
      <div className="w-4/5 border-white border-[1px] mx-auto rounded-md my-4 text-white ">
        <form
          className="flex items-center rounded-lg bg-neutral-700"
          onSubmit={handleSubmit}
        >
          <input
            className="bg-transparent flex-1 py-3 placeholder:text-white placeholder:px-6 "
            placeholder="Search Movie"
            value={searchTerm}
            onChange={handleChange}
          />
          <div>
            <button className="h-full  border-white border-l-[1px]  p-4">
              <FaSearch />
            </button>
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
