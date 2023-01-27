import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@mui/material";
import LoginForm from "./LoginForm";
import dao from "../fetch/user/dao";
import { useFormik } from "formik";
import { Context } from "../Context";
import { validate } from "../validation/Login";
import AlertMessage from "../common/AlertMessage";

export default function LoginCard() {
  const { loginUser } = useContext(Context);

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertOptions, setAlertOptions] = useState({
    title: "",
    message: "",
    severity: "error",
  });
  const [loginCredentials, setLoginCredentials] = useState({
    username: "mary.varga",
    password: "Xx66yy88cc",
  });

  const logInUser = async (values) => {
    let user = {
      username: values.username,
      password: values.password,
    };
    let result = await dao.postLogin(user);
    if (result === 400) {
      setAlertOptions({
        severity: "error",
        title: "Login failed",
        message: "Check that username and password are correct.",
      });
      setAlertOpen(true);
      return;
    } else {
      loginUser(result.jwt);
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: loginCredentials,
    validate,
    onSubmit: (values) => {
      logInUser(values);
      return;
    },
  });
  return (
    <div>
      <AlertMessage
        alertOpen={alertOpen}
        alertOptions={alertOptions}
        setAlertOpen={setAlertOpen}
      />
      <Card variant="outlined">
        <CardHeader title="Log in" sx={{ textAlign: "center" }}></CardHeader>
        <CardContent>
          <LoginForm formik={formik} />
        </CardContent>
      </Card>
    </div>
  );
}
