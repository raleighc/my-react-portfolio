import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <div className="mx-auto order-0">
          <Link id="brandName" className="navbar-brand mx-auto" to="/">
            RAleiGH cHesney
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".dual-collapse2"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <a className="nav-link" target="_blank" rel="noreferrer noopener" href="https://github.com/raleighc">
              <i class="fab fa-github-square fa-2x"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/raleigh-chesney/">
              <i class="fab fa-linkedin fa-2x"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="_blank" rel="noreferrer noopener" href="https://drive.google.com/file/d/1G45DpT7DQbb3YtiKl0l-HhxIHbfAxMIZ/view?usp=sharing">
              <i class="far fa-file fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
