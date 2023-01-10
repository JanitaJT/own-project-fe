import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { CardHeader, Grid } from "@mui/material";
import { Box } from "@mui/system";
import LogIn from "../user/LogIn";

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
          <Card variant="outlined">
            <CardHeader
              title="Log in"
              sx={{ textAlign: "center" }}
            ></CardHeader>
            <CardContent>
              <LogIn />
            </CardContent>
            <CardActions
              sx={{
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Button variant="contained">Log in</Button>
            </CardActions>
          </Card>
        </Grid>
      </Box>
    </div>
  );
}
