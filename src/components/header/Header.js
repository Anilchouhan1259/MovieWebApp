import { NavLink } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <>
      <div className="header bg-slate-900">
        <div className="headerLeft">
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              fontWeight: "300",
              fontSize: "300%",
            }}
          >
            Movie Hub
          </NavLink>
        </div>
        <div className="headerRight">
          <NavLink to="movies/popular" style={{ textDecoration: "none" }}>
            popular
          </NavLink>
          <NavLink to="movies/upcoming" style={{ textDecoration: "none" }}>
            upcoming
          </NavLink>
          <NavLink to="movies/top_rated" style={{ textDecoration: "none" }}>
            Top Rated
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
