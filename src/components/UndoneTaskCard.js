import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import UndoneTaskList from "./UndoneTaskList";
import AddTaskContainer from "./AddTaskContainer";
import TaskPagination from "./TaskPagination";

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
  let pageSize = 5;
  const [paginateTasks, setPaginateTasks] = useState([]);
  const [pagination, setPagination] = useState({
    from: 0,
    to: pageSize,
  });
  useEffect(() => {
    setPaginateTasks(taskList.slice(0, 5));
  }, [taskList]);
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
                  paginateTasks={paginateTasks}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ justifyContent: "center", alignItems: "center" }}>
            <TaskPagination
              pagination={pagination}
              setPagination={setPagination}
              taskList={taskList}
              setPaginateTasks={setPaginateTasks}
            />
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
}
