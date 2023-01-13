import React, { useContext } from "react";
import { Context } from "../Context";
export default function HomeScreen() {
  const { auth } = useContext(Context);
  return <div>Welcome {auth.firstName}</div>;
}
