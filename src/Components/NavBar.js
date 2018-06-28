import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOn: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      dropdownOn: !this.state.dropdownOn
    });
    console.log(window.innerWidth);
  }
  render() {
    const { dropdownOn } = this.state;

    let menu;
    if (!dropdownOn) {
      menu = (
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <i className="fas fa-search" />
          <input className="search-bar" autoComplete="off" />
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
              {/* Currently this is the /path but ti will be /newwoander or Login */}
              <Link to="/path" className="nav-item btn btn-primary">
                New Woander
              </Link>
            </li>
          </ul>
        </div>
      );
    } else {
      menu = <div>Hello</div>;
    }
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
          onClick={this.toggleMenu}
        >
          <span className="navbar-toggler-icon" />
        </button>
        {menu}
      </nav>
    );
  }
}

export default NavBar;
