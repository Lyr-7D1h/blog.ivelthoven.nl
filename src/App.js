import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { HashRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AdminPage from "./pages/AdminPage";

// const supportsHistory = "pushState" in window.history;

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/admin" component={AdminPage} />
      </Switch>
    </HashRouter>
  );
}

export default App;
