import React, { useContext, useEffect, useState } from "react";
import NavBar from "../common/NavBar";
import CompletedTaskCard from "../components/CompletedTaskCard";
import UndoneTaskCard from "../components/UndoneTaskCard";
import { Context } from "../Context";
import dao from "../fetch/user/dao";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

export default function TaskScreen() {
  const { auth } = useContext(Context);
  const [taskList, setTaskList] = useState([]);
  const [singleTask, setSingleTask] = useState({
    assigned: Date.parse(new Date()),
    name: null,
    description: null,
    completed: null,
    dl: Date.parse(new Date()),
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [hoverColor, sethoverColor] = useState("#CFD6D5  ");

  const userTasks = async (jwt) => {
    let result = await dao.getUserTasks(jwt);
    setTaskList(result);
  };

  useEffect(() => {
    userTasks(auth.jwt);
  }, []);
  return (
    <div>
      <NavBar />
      <Container maxWidth="100%">
        <Grid
          container
          justifyContent="space-evenly"
          alignItems="flex-start"
          marginTop="50px"
          column={2}
          padding={3}
        >
          <UndoneTaskCard
            taskList={taskList}
            userTasks={userTasks}
            singleTask={singleTask}
            setSingleTask={setSingleTask}
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
            sethoverColor={sethoverColor}
          />
          <CompletedTaskCard
            taskList={taskList}
            singleTask={singleTask}
            setSingleTask={setSingleTask}
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
            sethoverColor={sethoverColor}
          />
        </Grid>
      </Container>
    </div>
  );
}
