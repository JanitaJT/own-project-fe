import React, { useContext } from "react";
import { Context } from "../Context";
import { Link, NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

export default function NavBar() {
  const { logoutUser } = useContext(Context);
  return (
    <div>
      <NavLink to="/">Home</NavLink>

      <NavLink to="/task">Tasks</NavLink>

      <Button
        onClick={() => {
          logoutUser();
        }}
      >
        Log out
      </Button>
    </div>
  );
}
