import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import LoginCard from "../user/LoginCard";

export default function LoginScreen() {
  return (
    <div>
      <Box>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          column={2}
          columnSpacing={2}
          padding={2}
          marginTop="30px"
        >
          <LoginCard />
        </Grid>
      </Box>
    </div>
  );
}
