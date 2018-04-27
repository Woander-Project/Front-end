import React, { Component } from "react";

class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
				<a className="navbar-brand" href="#">
					Woander
				</a>
				<i className="fas fa-search" />
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav ml-auto">
						<a className="nav-item nav-link" href="#">
							Home
						</a>
						<a className="nav-item nav-link" href="#">
							About
						</a>
						<a className="nav-item btn btn-primary" href="#">
							New Woander
						</a>
					</div>
				</div>
			</nav>
		);
	}
}

export default NavBar;
