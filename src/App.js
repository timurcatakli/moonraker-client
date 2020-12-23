import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          exact={false}
          path={[
            "/best-sellers/:slug1/:slug2/:slug3/:slug4",
            "/best-sellers/:slug1/:slug2/:slug3",
            "/best-sellers/:slug1/:slug2",
            "/best-sellers/:slug1"
          ]}
        >
          <Category />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
