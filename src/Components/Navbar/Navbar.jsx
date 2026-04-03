import { House, Plus, Receipt, Settings } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="sticky bottom-2 bg-transparent z-50 w-full flex justify-center items-center">
      <nav className="bg-transparent">
        <ul className="px-3 py-2 rounded-full flex justify-center items-center gap-10 bg-white/20 backdrop-blur-md border border-white/20">
          <NavLink
            to="/"
            className={({ isActive }) => `px-4 py-5 ${isActive ? "text-red-500 rounded-full bg-gray-600" : "text-white"}`}
          >
            <House size={30}></House>
          </NavLink>
          <NavLink
            to="/add"
            className={({ isActive }) => `px-4 py-5 ${isActive ? "text-red-500 rounded-full bg-gray-600" : "text-white"}`}
          >
            <Plus size={30}></Plus> 
          </NavLink>
          <NavLink
            to="/transactions"
            className={({ isActive }) => `px-4 py-5 ${isActive ? "text-red-500 rounded-full bg-gray-600" : "text-white"}`}

          >
            <Receipt size={30}></Receipt>
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) => `px-4 py-5 ${isActive ? "text-red-500 rounded-full bg-gray-600" : "text-white"}`}
          >
            <Settings size={30}></Settings>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
