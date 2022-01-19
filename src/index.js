import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Signup from "./components/Signup";
import LoginWrap from "./components/LoginWrap";
import CalcList from "./components/calcs/CalcList";
import { Account } from "./components/Account";

import {BrowserRouter, Routes, Route} from 'react-router-dom';

/*
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
*/


  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <Account>
        <Routes>
          <Route path="/" element={ <App /> }></Route>
          <Route path="/signup" element={ <Signup /> }></Route>
          <Route path="/login" element={ <LoginWrap /> }></Route>
          <Route path="/calc-list" element={ <CalcList /> }></Route>
        </Routes>
        </Account>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
