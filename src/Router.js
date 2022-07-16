import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/auth/Home";
import Welcome from "./components/auth/Welcome";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
          </>
        ) : (
          <Route path="/" element={<Welcome />} />
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
