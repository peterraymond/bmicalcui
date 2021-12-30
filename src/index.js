import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Signup from "./components/Signup";
import LoginWrap from "./components/LoginWrap";

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
        <Routes>
          <Route path="/" element={ <App /> }></Route>
          <Route path="/signup" element={ <Signup /> }></Route>
          <Route path="/login" element={ <LoginWrap /> }></Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
