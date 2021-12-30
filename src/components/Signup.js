import React, { useState } from "react";
import UserPool from "../UserPool";
import Nav from "./Nav";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error(err);
        if (err != null){
          document.getElementById("response-message").innerHTML = err.message;
        }
      }
      console.log(data);
      if (data != null){
        document.getElementById("response-message").innerHTML = data.message;
      }
    });
  };

  return (
    <div>
      <Nav/> 
      <h2>Signup</h2> 
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        
        <div>8 chars, 1 upper, 1 special char</div>
        <button type="submit">Signup</button>
        <div id="response-message"></div>

      </form>

    </div>
  );
};

export default Signup;