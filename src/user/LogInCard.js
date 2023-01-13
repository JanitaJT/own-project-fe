import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@mui/material";
import LogInForm from "./LogInForm";
import dao from "../fetch/user/dao";
import { useFormik } from "formik";
import { Context } from "../Context";

export default function LogInCard() {
  const { loginUser } = useContext(Context);
  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
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
          <LogInForm formik={formik} />
        </CardContent>
      </Card>
    </div>
  );
}
