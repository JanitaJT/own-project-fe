import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
} from "@mui/material";
import React from "react";
import CompletedTaskList from "./CompletedTaskList";

export default function CompletedTaskCard(props) {
  const {
    taskList,
    singleTask,
    setSingleTask,
    openDialog,
    setOpenDialog,
    sethoverColor,
  } = props;

  return (
    <div>
      <Grid item xs={12}>
        <Card variant="outlined">
          <CardHeader
            title="Completed Tasks"
            sx={{ textAlign: "center" }}
          ></CardHeader>
          <CardActions
            sx={{ justifyContent: "center", alignItems: "center" }}
          ></CardActions>
          <CardContent>
            <Grid
              container
              direction="row"
              rowSpacing={1}
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Grid item md={12} xs={12}>
                <CompletedTaskList
                  taskList={taskList}
                  singleTask={singleTask}
                  setSingleTask={setSingleTask}
                  openDialog={openDialog}
                  setOpenDialog={setOpenDialog}
                  sethoverColor={sethoverColor}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
