import React from "react";
import ".//NavBar.css";
import logo from "../images/logo.PNG";
import { NavLink } from "react-router-dom";
import horizontalMoreAction from "../images/horizontalMoreAction.PNG";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand ms-5">
            <img alt="logo" src={logo} height="45px"></img>
          </NavLink>
          <form className="d-flex me-md-5 ">
            <input
              className="searchbox form-control me-2 text-muted"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <a className="new-link fs-5 text-dark searchIcon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
            <a className="new-link px-4 text-dark fs-5" href="#">
              <i className="fa-solid fa-house"></i>
            </a>

            <a className="new-link text-dark fs-5" href="#">
              <i className="fa-regular fa-heart"></i>
            </a>
            <div className="dropdown">
              <a
                className="btn"
                href="#"
                role="button"
                data-bs-toggle="dropdown">
                <img
                  alt="profile_pic"
                  className="navbar-profile-pic"
                  src="https://images.unsplash.com/photo-1617478636464-7ea9804bbf58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80"
                />
              </a>

              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item mt-0" to="/myProfile">
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
