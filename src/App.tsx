import React from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import EmployeePortal from "./layout/components/Explore-Pages";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<EmployeePortal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
