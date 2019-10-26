import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AdminPage from "./pages/AdminPage";

const supportsHistory = "pushState" in window.history;

function App() {
  return (
    <BrowserRouter forceRefresh={!supportsHistory}>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/projects" component={ProjectsPage} />
      <Route exact path="/admin">
        <AdminPage />
      </Route>
    </BrowserRouter>
  );
}

export default App;
