import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/" id="heading">
            Bank of Public
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">
                  <p>Home</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Createuser">
                  <p>Create User</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Transfer">
                  <p>Transfer Money</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Transaction">
                  <p>Transaction History</p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
