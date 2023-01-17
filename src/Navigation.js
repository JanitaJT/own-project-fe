import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import { Context } from "./Context";

export default function Navigation() {
  const { auth } = useContext(Context);
  return (
    <div>
      <Router>
        {auth.loggedIn ? (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        ) : (
          <Routes>
            <Route exact path="/" element={<LoginScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}
