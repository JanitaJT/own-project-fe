import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardHeader, Grid } from "@mui/material";
import LogInForm from "./LogInForm";
import dao from "../fetch/user/dao";
import { useFormik } from "formik";

export default function LogInCard() {
  const [initialLogInValues, setInitialLogInValues] = useState({
    username: "",
    password: "",
  });

  const logInUser = async (values) => {
    let user = {
      username: values.username,
      password: values.password,
    };
    let result = await dao.postLogin(user);
    return result;
  };

  const formik = useFormik({
    initialValues: initialLogInValues,
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
