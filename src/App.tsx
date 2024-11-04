import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./Rootlayout/Rootlayout";
import Home from "./Pages/Home/Home";

const App: React.FC = () => {
  return (
    <div className="Container_MEGA">
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
