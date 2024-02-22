import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <nav className="flex justify-between bg-slate-800 text-white">
      <div className="p-4">
        <h2> Navbar </h2>
      </div>
      <div
        className="block md:hidden absolute aspect-square  z-10000 right-2 top-2"
        onClick={handleClick}
      >
        <Button />
      </div>
      <div>
        <ul
          className={`fixed flex px-16 md:px-60 mt-14 md:mt-0 py-32 md:py-4 gap-y-2 md:gap-x-24
           md:flex-row flex-col inset-y-0 md:h-14 left-[30%] right-0
           transition ease md:translate-x-0  bg-slate-800 ${
             isClicked ? "" : "translate-x-full"
           }`}
        >
          <li>
            <NavLink to="movies/popular">Popular</NavLink>
          </li>
          <li>
            <NavLink to="movies/upcoming">Upcoming</NavLink>
          </li>
          <li>
            <NavLink to="movies/top_rated">TopRated</NavLink>
          </li>
          <li>
            <NavLink to="/help">Help</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
