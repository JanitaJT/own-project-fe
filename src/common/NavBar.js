import React, { useContext } from "react";
import { Context } from "../Context";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { AppBar, Toolbar, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

export default function NavBar() {
  const { logoutUser } = useContext(Context);
  return (
    <div>
      <Box>
        <AppBar position="static" sx={{ backgroundColor: "#626262" }}>
          <Toolbar>
            <Typography
              variant="body1"
              sx={{ padding: "10px" }}
              component={"span"}
            >
              <NavLink
                to="/"
                style={{ textDecoration: "none", color: "#FFFFFF" }}
              >
                HOME
              </NavLink>
            </Typography>
            <Typography
              variant="body1"
              sx={{ padding: "10px" }}
              component={"span"}
            >
              <NavLink
                to="/task"
                style={{ textDecoration: "none", color: "#FFFFFF" }}
              >
                TASKS
              </NavLink>
            </Typography>
            <Typography
              variant="h6"
              sx={{ padding: "10px" }}
              component={"span"}
            >
              <Button
                style={{
                  color: "#FFFFFF",
                }}
                startIcon={<LogoutIcon />}
                onClick={() => {
                  logoutUser();
                }}
              >
                Log out
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
