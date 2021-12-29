import React, { useState } from "react";
import axios from 'axios';

import TextInput from "./components/TextInput";
import Button from "./components/Button";
import './styles.css';



const App = () => {

  /* use state hooks to get the value of the input boxes */
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState();  
  const [bmiClass, setBmiClass] = useState();

  const [remotebmi, setRemoteBmi] = useState();

  const handleNameChange = (event) => setName(event.target.value);
  const handleHeightChange = (event) => setHeight(event.target.value);
  const handleWeightChange = (event) => setWeight(event.target.value);

  const computeBmi = () => {
    
    let bmiValue = (weight / (height / 100) ** 2).toFixed(2);

   let ApiUrl = 'https://30zat9xfgj.execute-api.eu-west-2.amazonaws.com/dev';
   //let ApiUrl = 'http://localhost:4000/bmi';

    console.log("computeBmi: local bmiValue: " + bmiValue);

    axios.get(ApiUrl, {

          params: {
         name: name,
         weight: weight,
         height: height
      }})
    .then(resp => {
        console.log("remote response");
        console.log(resp.data);
        setRemoteBmi(resp.data.result);

    })
    .catch(err => {
        // Handle Error Here
        console.error(err);
    });
    


    setBmi(bmiValue);
    let bmiClass = getBmi(bmiValue);
    setBmiClass(bmiClass);
    setHeight("")
    setWeight("")
  };

  const getBmi = (bmi) => {
    
    if (bmi < 18.5) {
      return "Underweight";
    }
    if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    }
    if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    }
    if (bmi >= 30) {
      return "Obesity";
    }
  };

  return (
    <div className="App">
    <div className="container">
      <div
        style={{
          display: "block",
          width: "50%",
          margin: "0 auto",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <h2>BMI Calculator</h2>
      </div>
      <div className="row">
        <TextInput
          label="name"
          placeholder="Name"
          handleChange={handleNameChange}
          value={name}
          type="text"
        />
      </div>
      <div className="row">
        <TextInput
          label="height"
          placeholder="Enter height in cm"
          handleChange={handleHeightChange}
          value={height}
          type="number"
        />
      </div>
      <div className="row">
        <TextInput
          label="weight"
          placeholder="Enter weight in kg"
          handleChange={handleWeightChange}
          value={weight}
          type="number"
          
        />
        
      </div>


      <div className="row">
        <Button label="Calculate" onClick={computeBmi} />
      </div>
      <div className="row">
        {
          isNaN(bmi)?null:<h3>Browser calculated BMI  = {bmi}</h3> 

        }
        {
          isNaN(bmi)?null:<h3>Remote API calculated BMI  = {remotebmi}</h3> 
        }
        
      </div>
      <div className="row">
        <h3>{bmiClass}</h3>
      </div>
    </div>
    </div>
  );
};

export default App;
