import React, { useState } from "react";
import axios from 'axios';
import UserPool from "./UserPool";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
import './styles.css';



const App = () => {

  /* use state hooks to get the value of the input boxes */
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState();  
  const [bmiClass, setBmiClass] = useState();

  const [remoteBmi, setRemoteBmi] = useState();

  const handleHeightChange = (event) => setHeight(event.target.value);
  const handleWeightChange = (event) => setWeight(event.target.value);

  const [calcRequested, setCalcRequested] = useState("");

  const computeBmi = () => {
    
  let bmiValue = 0; //(weight / (height / 100) ** 2).toFixed(1);

  let ApiUrl = 'https://30zat9xfgj.execute-api.eu-west-2.amazonaws.com/dev';
   //let ApiUrl = 'http://localhost:4000/bmi';

  console.log("computeBmi: local bmiValue: " + bmiValue);

  const  user = UserPool.getCurrentUser()

  if (user!=null){
    console.log("user:", user);
    console.log("username: ", user.getUsername());
  }

    axios.get(ApiUrl, {
      params: {
         weight: weight,
         height: height
      }})
    .then(resp => {
      console.log(resp.data);    
      setRemoteBmi(resp.data.result);
      console.log("Bmi:", bmi );
      bmiValue = resp.data.result; 
      setBmi(bmiValue);
      let bmiClass = getBmi(bmiValue);
      setBmiClass(bmiClass);
      setHeight("")
      setWeight("")

    })
    .catch(err => {
        // Handle Error Here
        console.error(err);
    });

    // working local version
    //setBmi(bmiValue);
    //let bmiClass = getBmi(bmiValue);
    //setBmiClass(bmiClass);
    //setHeight("")
    //setWeight("")

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
      return "Obese";
    }
    setCalcRequested(true);
  };

  return (
    <div className="App">
    <div className="container">
      <div className="row">
      <h2>BMI Calculator</h2>
      </div>
      <div className="row">
        <TextInput
          label="Height"
          placeholder="enter in cm"
          handleChange={handleHeightChange}
          value={height}
          type="number"
        />
      </div>
      <div className="row">
        <TextInput
          label="Weight"
          placeholder="enter in kg"
          handleChange={handleWeightChange}
          value={weight}
          type="number"
          
        />
      </div>


      <div>
        <Button label="Calculate" onClick={computeBmi} />
      </div>
      <div>
        {/*isNaN(bmi)?null:<h3>Browser calculated BMI  = {bmi}</h3>*/ }
        {isNaN(bmi)?null:<h3>BMI  = {remoteBmi}</h3>}
        <h3>{bmiClass}</h3>

        {isNaN(bmi) && calcRequested ? <div>Did you enter numbers?!</div> : ""}

      </div>
    </div>
    </div>
  );
};

export default App;
