import React, {    } from "react";
import "../styles.css";
import Login from "./Login";
import { Account } from "./Account";
import Status from "./Status";
import Nav from "./Nav";
import UserPool from "../UserPool";




const LoginWrap = () => {

  const  user = UserPool.getCurrentUser()
  console.log("user:", UserPool.getCurrentUser());


  return (
    <div className="App">
      <Account>
        <Nav/>  
        {(function() {
          if (user == null) {
            return <Login />
          }
        })()}

      <Status />
        {/*<Settings />*/}
      </Account>

    </div>

  );
};
export default LoginWrap;