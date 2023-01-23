import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "../src/screens/LoginScreen";
import HomeScreen from "../src/screens/HomeScreen";
import { Context } from "../src/Context";
import TaskScreen from "../src/screens/TaskScreen";

export default function Navigation() {
  const { auth } = useContext(Context);

  return (
    <div>
      <Router>
        {auth.loggedIn ? (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/task" element={<TaskScreen />} />
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
