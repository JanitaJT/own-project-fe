import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@mui/material";
import LoginForm from "./LoginForm";
import dao from "../fetch/user/dao";
import { useFormik } from "formik";
import { Context } from "../Context";

export default function LoginCard() {
  const { loginUser } = useContext(Context);
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
    loginUser(result.jwt);
  };

  const formik = useFormik({
    initialValues: loginCredentials,
    //validate
    onSubmit: (values) => {
      logInUser(values);
      return;
    },
  });
  return (
    <div>
      <Card variant="outlined">
        <CardHeader title="Log in" sx={{ textAlign: "center" }}></CardHeader>
        <CardContent>
          <LoginForm formik={formik} />
        </CardContent>
      </Card>
    </div>
  );
}
