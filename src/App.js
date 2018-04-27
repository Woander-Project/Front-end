import React, {Component} from "react";
import NavBar from "./Components/NavBar";
import Path from "./Components/Path";

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar/>
				<Path/>
			</div>
		);
	}
}

export default App;

