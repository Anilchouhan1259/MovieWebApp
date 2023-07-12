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
        <div className="card">
          {movie.poster_path ? (
            <img
              className="card_img"
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
  return <div className="cards">{renderedmovie}</div>;
};

export default Card;
