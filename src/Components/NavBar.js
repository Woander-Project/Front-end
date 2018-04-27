import React, {Component} from "react";
import {Link} from "react-router-dom";

class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
				<div>
					<Link to='/' className="navbar-brand">Woander</Link>
				</div>
				<i className="fas fa-search"/>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<ul className="navbar-nav ml-auto">
						<li>
							<Link to='/' className="nav-item nav-link">Home</Link>
						</li>
						<li>
							<Link to='/about' className="nav-item nav-link">About</Link>
						</li>
						<li>
							{/* Currently this is the /path but ti will be /newwoander */}
							<Link to='/path' className="nav-item btn btn-primary">New Woander</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default NavBar;
