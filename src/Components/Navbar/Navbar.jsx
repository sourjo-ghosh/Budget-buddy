import { House, Plus, Receipt, Settings } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="sticky bottom-2">
      <nav>
        <ul className="p-7 rounded-full flex justify-center items-center gap-8 bg-[#1E293B]">
          <NavLink
            to="/"
            className={({ isActive }) => `flex flex-col items-center ${isActive ? "text-[#7f56c5]" : "text-white"}`}
          >
            <House></House> Dashboard
          </NavLink>
          <NavLink
            to="/add"
            className={({ isActive }) => `flex flex-col items-center ${isActive ? "text-[#7f56c5]" : "text-white"}`}
          >
            <Plus></Plus> Add
          </NavLink>
          <NavLink
            to="/transactions"
            className={({ isActive }) => `flex flex-col items-center ${isActive ? "text-[#7f56c5]" : "text-white"}`}

          >
            <Receipt></Receipt> Transactions
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) => `flex flex-col items-center ${isActive ? "text-[#7f56c5]" : "text-white"}`}
          >
            <Settings></Settings> Settings
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
