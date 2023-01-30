import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
} from "@mui/material";
import React from "react";
import UndoneTaskList from "./UndoneTaskList";
import AddTaskContainer from "./AddTaskContainer";

export default function UndoneTaskCard(props) {
  const {
    taskList,
    userTasks,
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
          <CardHeader title="Tasks" sx={{ textAlign: "center" }}></CardHeader>
          <CardActions sx={{ justifyContent: "center", alignItems: "center" }}>
            <AddTaskContainer userTasks={userTasks} />
          </CardActions>
          <CardContent>
            <Grid
              container
              direction="row"
              rowSpacing={1}
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Grid item md={12} xs={12}>
                <UndoneTaskList
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
