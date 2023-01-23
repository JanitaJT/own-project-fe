import React, { useState } from "react";
import jwt_decode from "jwt-decode";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    jwt: null,
    username: null,
    firstName: null,
    lastName: null,
    loggedIn: false,
  });

  function loginUser(jwt) {
    let decode = jwt_decode(jwt);
    // console.log("user info", decode);
    setAuth({
      jwt: jwt,
      username: decode.username,
      loggedIn: true,
      firstName: decode.first_name,
      lastName: decode.last_name,
    });
  }

  function logoutUser() {
    setAuth({
      jwt: null,
      username: null,
      firstName: null,
      lastName: null,
      loggedIn: false,
    });
  }

  return (
    <Context.Provider value={{ auth, loginUser, logoutUser }}>
      {children}
    </Context.Provider>
  );
};
