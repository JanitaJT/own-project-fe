import React, { useState } from "react";
import { FormControl, Grid } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
export default function () {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Grid item xs={12} padding={1}>
        <FormControl variant="outlined">
          <InputLabel>Username</InputLabel>
          <OutlinedInput
            label="Username"
            sx={{ width: "220px" }}
          ></OutlinedInput>
        </FormControl>
      </Grid>
      <Grid item xs={12} padding={1}>
        <FormControl variant="outlined">
          <InputLabel>Password</InputLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            sx={{ width: "220px" }}
            label="Password"
          />
        </FormControl>
        {/* <TextField
          label="Password"
        
        ></TextField> */}
      </Grid>
    </div>
  );
}
