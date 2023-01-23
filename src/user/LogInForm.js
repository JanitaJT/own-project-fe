import React, { useState } from "react";
import { Button, FormControl, FormHelperText, Grid } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";

export default function LoginForm(props) {
  const { formik } = props;
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Grid item xs={12} padding={1}>
          <FormControl variant="outlined">
            <InputLabel>Username</InputLabel>
            <OutlinedInput
              label="Username"
              sx={{ width: "220px" }}
              name="username"
              onChange={formik.handleChange("username")}
              value={formik.values.username}
              onBlur={formik.handleBlur("username")}
              error={formik.touched.username && formik.errors.username}
            ></OutlinedInput>
            <FormHelperText>
              {formik.touched.username && formik.errors.username}
            </FormHelperText>
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
              name="password"
              onChange={formik.handleChange("password")}
              value={formik.values.password}
              onBlur={formik.handleBlur("password")}
              error={formik.touched.password && formik.errors.password}
            />
            <FormHelperText>
              {formik.touched.password && formik.errors.password}
            </FormHelperText>
          </FormControl>
          <CardActions
            sx={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <Button variant="contained" type="onSubmit">
              Log in
            </Button>
          </CardActions>
        </Grid>
      </form>
    </div>
  );
}
