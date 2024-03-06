import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="title">
        KRS Quizes
      </Link>
      <div className="menu">
        {/* <span></span>
        <span></span>
        <span> </span> */}
      </div>
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/Announcements">Announcements</NavLink>
        </li>

        <li>
          <NavLink to="/Quizes">Quizes</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>

        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/result">Result</NavLink>
        </li>
      </ul>
    </nav>
    // <div className="quizbg"></div>
  );
};
