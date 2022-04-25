import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GiShieldBash, GiExitDoor } from "react-icons/gi";

import SearchScreen from "./SearchScreen";
import { AuthContext } from "../../auth/autContext";
import { types } from "../../types/types";
export const Navbar = () => {
  const { userState,UserDispatch } = useContext(AuthContext);
  const navigate = useNavigate();

 

  const hanndleLogout = () => {
    navigate("/login", { replace: true });
    UserDispatch({ type: types.LOGOUT });
  };

  return (
    <nav className="bg-white shadow-md w-full flex py-5 px-5 items-center ">
      <div className="px-7 py-2 flex items-center text-blue-700  hover:text-blue-400 transition-colors delay-75 font-bold ">
        <GiShieldBash className="text-4xl" />
        <Link className="text-2xl" to="/">
          Asociaciones
        </Link>
      </div>

      <div className="mr-10 flex items-center">
        <div className="space-x-5 pt-1 text-lg  font-semibold ">
          <NavLink
            className={({ isActive }) =>
              `animation-nav ${isActive && "text-pink-700"}`
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `animation-nav ${isActive && "text-pink-700"}`
            }
            to="/dc"
          >
            DC
          </NavLink>
        </div>
      </div>
      <SearchScreen />
      <div className="flex items-center   ml-auto   px-10">
        <span className="text-lg transition-colors text-blue-500 font-bold mr-4  ">
          {userState?.nombre}
        </span>
        <button
          type="button"
          className="text-3xl transition-colors text-indigo-500 hover:text-red-700"
          onClick={hanndleLogout}
        >
          <GiExitDoor />
        </button>
      </div>
    </nav>
  );
};
