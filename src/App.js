import React from "react";
import "./styles.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Account } from "./components/Account";
import Status from "./components/Status";
import Settings from "./components/Settings";
import Bmi from "./Bmi";
import Nav from "./components/Nav"

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

/*
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
*/

const App = () => {
    return (
         
        <div className="App">
          <Bmi/>
          <Nav/>
        </div>
    );
  };





export default App;