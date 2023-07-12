import Card from "../card/Card";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieList } from "../../thunks/fetchMovieList";
import { useParams } from "react-router-dom";

const MovieList = () => {
  const { type } = useParams();
  const { movieList } = useSelector((state) => {
    return state.search;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieList(type));
  }, [type]);

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">{<Card movies={movieList} />}</div>
    </div>
  );
};

export default MovieList;
