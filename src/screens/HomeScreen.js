import React, { useContext } from "react";
import NavBar from "../common/NavBar";
import { Context } from "../Context";

export default function HomeScreen() {
  const { auth } = useContext(Context);

  return (
    <div>
      <NavBar />
      Welcome {auth.firstName}
    </div>
  );
}
