import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    // <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/projects">
          <ProjectsPage />
        </Route>
      </Switch>
    </BrowserRouter>
    // </div>
  );
}

export default App;
