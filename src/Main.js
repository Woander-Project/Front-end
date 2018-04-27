import React from "react";
import {Switch, Route} from "react-router-dom";
import Homepage from "./Components/Homepage";
import Path from "./Components/Path";

const Main = () => (
	<main>
		<Switch>
			<Route exact path="/" component={Homepage}/>
			<Route path="/path" component={Path}/>
		</Switch>
	</main>
);

export default Main;
