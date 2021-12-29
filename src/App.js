import React from "react";
import "./styles.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Account } from "./components/Account";
import Status from "./components/Status";
import Settings from "./components/Settings";
import Bmi from "./Bmi";

const App = () => {
  return (
       
      <Account>
        <Bmi/>
        <Status />
        <h2>Sign Up to ZorbApp</h2> 
        <Signup />
        <hr></hr>
        <h2>Sign In  to ZorbApp</h2> 
        <Login />
        <Settings />
      </Account>

  );
};

export default App;