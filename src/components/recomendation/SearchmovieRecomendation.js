import { useDispatch } from "react-redux";
import { changeSearchTerm, changeShowRecomendate } from "../../store";
import "./recomendation.css";
const SearchmovieRecomendation = ({ data }) => {
  const dispatch = useDispatch();

  const recomendedTitle = data.slice(0, 4);
  const rederedRecomendedTitle = recomendedTitle.map((movie) => {
    const handleClick = () => {
      dispatch(changeSearchTerm(movie.title));
      dispatch(changeShowRecomendate(false));
    };
    return (
      <div className="recomendationbar" onClick={handleClick} key={movie.id}>
        {movie.title}
      </div>
    );
  });
  return <div className="recomendation">{rederedRecomendedTitle}</div>;
};

export default SearchmovieRecomendation;
