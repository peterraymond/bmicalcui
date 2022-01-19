import React from "react";
//import "./styles.css";
import Bmi from "./Bmi";
import Nav from "./components/Nav"
import {Account} from "./components/Account"
//import "bootstrap/dist/css/bootstrap.min.css";
//import "@fortawesome/fontawesome-free/css/all.css";
//import "@fortawesome/fontawesome-free/js/all.js";



const App = () => {
    return (  
        <div className="App">
           <Account>
            <Nav/>
            <Bmi/>
          </Account>
        </div>
    );
  };

export default App;