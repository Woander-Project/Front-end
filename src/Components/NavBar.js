import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          Woander
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse">
          <i className="fas fa-search" />
          <input className="search-bar" autoComplete="off" />
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ml-auto">
            <li>
              <Link to="/" className="nav-item nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-item nav-link">
                About
              </Link>
            </li>
            <li>
              {/* Currently this is the /path but ti will be /newwoander */}
              <Link to="/path" className="nav-item btn btn-primary">
                New Woander
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
