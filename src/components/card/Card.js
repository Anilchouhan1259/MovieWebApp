import "./card.css";
import { Link } from "react-router-dom";
const Card = ({ movies }) => {
  const renderedmovie = movies.map((movie) => {
    return (
      <Link
        to={`/movie/${movie.id}`}
        style={{ textDecoration: "none", color: "white" }}
        key={movie.id}
      >
        <div className="relative rounded-lg cursor-pointer overflow-hidden border-[1px] hover:scale-125 transition ease mr-[15px] mb-[15px] h-[300px] w-[200px] mx-auto z-0">
          {movie.poster_path ? (
            <img
              className="h-[300px]"
              alt="poster"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
          ) : (
            ""
          )}

          <div className="card_overlay">
            <div className="card_title">{movie.title}</div>
            <div>
              {movie.release_date}
              <span className="rating">{movie.vote_average}</span>
            </div>
            <div className="card_description">
              {movie.overview.slice(0, 118) + "..."}
            </div>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <div className="grid grid-cols-1 md:max-lg:grid-cols-3 lg:grid-cols-5 mx-auto">
      {renderedmovie}
    </div>
  );
};

export default Card;
