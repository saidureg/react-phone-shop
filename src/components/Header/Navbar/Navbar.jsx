import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="max-w-[1380px] mx-auto">
      <div className="flex justify-between items-center py-6 ">
        <Logo></Logo>
        <ul className="flex gap-6 text-xl">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-gray-400 underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-gray-400 underline"
                  : ""
              }
            >
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-gray-400 underline"
                  : ""
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
