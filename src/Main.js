import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Path from "./Components/Path";
import LoginForm from "./Components/LoginForm";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/path" component={Path} />
      <Route path="/login" component={LoginForm} />
    </Switch>
  </main>
);

export default Main;
