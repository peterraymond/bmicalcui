import React from "react";
import "../styles.css";
import Signup from "./Signup";
import Login from "./Login";
import { Account } from "./Account";
import Status from "./Status";
import Settings from "./Settings";
import Nav from "./Nav";


const LoginWrap = () => {
  return (
      <Account>
        <Nav/>  
        <Status />

        <h2>Login</h2> 
        <Login />
        <Settings />
      </Account>
  );
};
export default LoginWrap;