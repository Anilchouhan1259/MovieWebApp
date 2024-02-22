import { useDispatch } from "react-redux";
import { changeSearchTerm, changeShowRecomendate } from "../../store";
import { FaSearch } from "react-icons/fa";
const SearchmovieRecomendation = ({ data }) => {
  const dispatch = useDispatch();

  const recomendedTitle = data.slice(0, 9);
  const rederedRecomendedTitle = recomendedTitle.map((movie) => {
    const handleClick = () => {
      dispatch(changeSearchTerm(movie.title));
      dispatch(changeShowRecomendate(false));
    };
    return (
      <div
        className="p-2 flex items-center hover:bg-neutral-500 text-white"
        onClick={handleClick}
        key={movie.id}
      >
        <FaSearch />
        <span className="px-4">{movie.title}</span>
      </div>
    );
  });
  return (
    <div className="w-4/5 mx-auto bg-neutral-700 rounded-md">
      {rederedRecomendedTitle}
    </div>
  );
};

export default SearchmovieRecomendation;
