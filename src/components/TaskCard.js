import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import TaskList from "./TaskList";
import dao from "../fetch/user/dao";
import { Context } from "../Context";
import AddTaskContainer from "./AddTaskContainer";

export default function TaskCard() {
  const { auth } = useContext(Context);
  const [taskList, setTaskList] = useState([]);

  const userTasks = async (jwt) => {
    let result = await dao.getUserTasks(jwt);
    setTaskList(result);
  };

  useEffect(() => {
    userTasks(auth.jwt);
  }, []);

  return (
    <div>
      <Grid
        container
        justifyContent="space-evenly"
        alignItems="flex-start"
        marginTop="20px"
      >
        <Grid item xs={12} md={8}>
          <Card variant="outlined">
            <CardHeader title="Tasks" sx={{ textAlign: "center" }}></CardHeader>
            <CardActions
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
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
                  <TaskList taskList={taskList} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
