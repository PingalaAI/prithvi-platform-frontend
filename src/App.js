import React from "react";
import "./App.scss";
import { createBrowserHistory } from "history";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Dashboard from "./views/Dashboard/dashboard.component";
import NotFound from "./views/NotFound/not-found.component";
import Auth from "./views/Authentication/auth.component";
import Login from "./views/Login/Login";

const hist = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={hist}>
        <Redirect to="/login" />
        <Switch>
          <Route exact path="/login" component={Auth} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
