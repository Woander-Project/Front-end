import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOn: false,
      width: undefined
    };
    this.updateDimensions = this.updateDimensions.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", () => {
      this.updateDimensions();
      this.closeDropdown();
    });
    window.addEventListener("scroll", this.closeDropdown);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () => {
      this.closeDropdown();
    });
  }

  updateDimensions() {
    this.setState({
      width: window.innerWidth
    });
  }

  dropdownToggle() {
    this.setState({
      dropdownOn: !this.state.dropdownOn
    });
  }

  closeDropdown() {
    this.setState({
      dropdownOn: false
    });
  }

  render() {
    const showDropdownStyle = { display: "block", left: "-100px" };

    let menu;
    if (this.state.width > 992) {
      menu = (
        <div className=" collapse navbar-collapse" id="navbarNavAltMarkup">
          <span>
            <i className="fas fa-search" />
          </span>
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
              <Link to="/login" className="nav-item btn btn-primary">
                Login
              </Link>
            </li>
          </ul>
        </div>
      );
    } else {
      menu = (
        <div className="dropdown">
          <button
            className="navbar-toggler dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={this.dropdownToggle}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            style={this.state.dropdownOn ? showDropdownStyle : null}
            className="dropdown-menu"
            aria-labelledby="dropdownMenuButton"
          >
            <Link
              to="/"
              className="nav-item nav-link dropdown-item"
              onClick={this.closeDropdown}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="nav-item nav-link dropdown-item"
              onClick={this.closeDropdown}
            >
              About
            </Link>
            <Link
              to="/login"
              className="btn-dropdown nav-item btn btn-primary"
              onClick={this.closeDropdown}
            >
              Login
            </Link>
          </div>
        </div>
      );
    }
    return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
        <Link to="/" className="navbar-brand">
          Woander
        </Link>
        {/* <button
            className="navbar-toggler dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon" />
          </button> */}
        {menu}
      </nav>
    );
  }
}

export default NavBar;
