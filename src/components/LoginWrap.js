import React, { useState, useContext, useEffect } from "react";
import "../styles.css";
import Signup from "./Signup";
import Login from "./Login";
import { Account } from "./Account";
import Status from "./Status";
import Settings from "./Settings";
import { AccountContext } from "./Account";
import Nav from "./Nav";
import UserPool from "../UserPool";




const LoginWrap = () => {

  const  user = UserPool.getCurrentUser()
  console.log("user:", UserPool.getCurrentUser());


  return (
    <div className="App">
      <Account>
        <Nav/>  
        <Status />

        {(function() {
          if (user == null) {
            return <Login />
          }
        })()}

        
        {/*<Settings />*/}
      </Account>
    </div>

  );
};
export default LoginWrap;