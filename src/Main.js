import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Path from "./Components/Path";
import LoginForm from "./Components/LoginForm";
import NewPath from "./Components/NewPath";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/path" component={Path} />
      <Route path="/login" component={LoginForm} />
      <Route path="/newpath" component={NewPath} />
    </Switch>
  </main>
);

export default Main;
