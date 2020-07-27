import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className = "navbar navbar-expand-lg navbar-light bg-light">
            
            <div>
                <ul className ="navbar-nav">
                    <li className ="nav-item">
                    <NavLink
              to="/about"
              className="nav-link"
              style={{ color: "darkGray",
              backgroundColor: "lightGreen" }}
              activeStyle={{ color: "black" }}
              exact
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/portfolio"
              className="nav-link"
              style={{ color: "darkGray",
              backgroundColor: "lightGreen" }}
              activeStyle={{ color: "black" }}
              exact
            >
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className="nav-link"
              style={{ color: "darkGray",
              backgroundColor: "lightGreen" }}
              activeStyle={{ color: "black" }}
              exact
            >
              Contact
            </NavLink>

                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;