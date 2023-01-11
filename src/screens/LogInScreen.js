import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import LogInCard from "../user/LogInCard";

export default function LogInScreen() {
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
          <LogInCard />
        </Grid>
      </Box>
    </div>
  );
}
