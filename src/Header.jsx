import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="ui fixed inverted menu">
      <div className="ui container">
        <Link id="header" className="header item" to="/">
          About me
        </Link>
        <div className="right menu">
          <NavLink
            id="Cv-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/cv"
          >
            Cv
          </NavLink>
          <NavLink
            id="projects-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/projects"
          >
            Projects
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;