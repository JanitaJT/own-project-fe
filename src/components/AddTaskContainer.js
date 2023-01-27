import React, { useState, useContext } from "react";
import { Button } from "@mui/material";
import AddTaskForm from "./AddTaskForm";
import { Context } from "../Context";
import { useFormik } from "formik";
import ConfirmationDialog from "../common/ConfirmationDialog";
import AlertMessage from "../common/AlertMessage";
import dao from "../fetch/user/dao";
import { format } from "date-fns";
import { validate } from "../validation/AddTask";

export default function AddTaskContainer(props) {
  const { userTasks } = props;
  const { auth } = useContext(Context);
  const [openDialog, setOpenDialog] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertOptions, setAlertOptions] = useState({
    title: "",
    message: "",
    severity: "error",
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogOptions, setDialogOptions] = useState({
    title: "",
    content: "",
  });
  const [initialTaskValues, setInitialTaskValues] = useState({
    assigned: new Date(),
    name: "",
    description: "",
    completed: 0,
    dl: new Date(),
  });

  const formik = useFormik({
    initialValues: initialTaskValues,
    validate,
    onSubmit: (values) => {
      setDialogOptions({
        title: "Are you sure you would like to add " + values.name + "?",
        content: "By proceeding, new task " + values.name + " will be added",
      });
      setDialogOpen(true);
      return;
    },
  });

  const addTask = async (values) => {
    let newTask = {
      assigned: format(new Date(values.assigned), "yyyy-MM-dd hh:mm:ss"),
      name: values.name,
      description: values.description,
      completed: values.completed,
      dl: format(new Date(values.dl), "yyyy-MM-dd hh:mm:ss"),
    };
    let jwt = auth.jwt;
    let result = await dao.postNewTask(jwt, newTask);
    if (result === 400) {
      setAlertOptions({
        severity: "error",
        title: "Error",
        message: "Something went wrong, try again later",
      });
      setAlertOpen(true);
      return;
    }
    if (result === 500) {
      setAlertOptions({
        severity: "error",
        title: "Error",
        message: "Something on the server went wrong, try again later",
      });
      setAlertOpen(true);
      return;
    }
    if (result === "error") {
      setAlertOptions({
        severity: "error",
        title: "Error",
        message: "Something went wrong, try again later",
      });
      setAlertOpen(true);
      return;
    }
    setAlertOptions({
      severity: "success",
      title: "Success!",
      message: "Task " + values.name + " added",
    });
    setAlertOpen(true);
    formik.resetForm();
    userTasks(auth.jwt);
  };

  return (
    <div>
      <AlertMessage
        alertOpen={alertOpen}
        alertOptions={alertOptions}
        setAlertOpen={setAlertOpen}
      />
      <ConfirmationDialog
        dialogOpen={dialogOpen}
        dialogOptions={dialogOptions}
        setDialogOpen={setDialogOpen}
        submit={addTask}
        submitValues={formik.values}
      />
      <Button
        onClick={() => {
          setOpenDialog(true);
        }}
      >
        Add task
      </Button>
      <AddTaskForm
        formik={formik}
        setOpenDialog={setOpenDialog}
        openDialog={openDialog}
      />
    </div>
  );
}
