import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "./App.css";

import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default withAuthenticator(App);
//export default App;
