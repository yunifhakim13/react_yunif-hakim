import React from "react";
import Logo from "../../assets/logo.svg";
import "../../App.css";
const Navbar = () => {
  return (
    <header class="py-3 px-3">
      <nav className="navbar navbar-expand-lg text-white">
        <div className="container-fluid py-2 px-3">
          <img className="navbar-brand" src={Logo} alt="logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="space collapse navbar-collapse"
            id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  SERVICES
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  DOCTORS
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Phillips K Vance MD
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Stanley K Hudson MD
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Kevin D Malone MD
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Angela S Martin MD
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link">CONTACT</a>
              </li>
            </ul>
          </div>
          <div>
            <button className="btn btn-close-white" id="login" type="submit">
              LOG IN
            </button>
            <button className="btn btn-primary" id="signin" type="submit">
              SIGN IN
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
