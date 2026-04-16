import React from "react";
import { BiStats } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { NavLink } from "react-router";
import logo from "/assets/logo.png";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition ${
      isActive ? "bg-green-700 text-white" : "hover:bg-gray-200"
    }`;

  return (
    <div className="shadow-sm bg-base-100">
      <div className="navbar container mx-auto px-4">
        {/* LEFT */}
        <div className="navbar-start">
          {/* Logo */}
          <img className="w-28 md:w-32" src={logo} alt="logo" />
        </div>

        <div className="navbar-end lg:hidden">
          {/* Mobile menu */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h12M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/" className={navLinkStyle}>
                  <IoHomeOutline /> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeLine" className={navLinkStyle}>
                  <RiTimeLine /> TimeLine
                </NavLink>
              </li>
              <li>
                <NavLink to="/stats" className={navLinkStyle}>
                  <BiStats /> Stats
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT (Desktop Menu) */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">
            <li>
              <NavLink to="/" className={navLinkStyle}>
                <IoHomeOutline /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/timeLine" className={navLinkStyle}>
                <RiTimeLine /> TimeLine
              </NavLink>
            </li>
            <li>
              <NavLink to="/stats" className={navLinkStyle}>
                <BiStats /> Stats
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
