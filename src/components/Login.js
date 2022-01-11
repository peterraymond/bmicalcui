import React, { useState, useContext } from "react";
import { AccountContext } from "./Account";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { authenticate } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();

    authenticate(email, password)
      .then((data) => {
        console.log("Logged in!", data);
        document.getElementById("response-message").innerHTML = "Success: <br/>" + JSON.stringify(data);
      })
      .catch((err) => {
        console.error("Failed to login", err);
        document.getElementById("response-message").innerHTML = err.message;
      });
  };

  return (
    <div >
      <h2>Login</h2>
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
        <br/>
        <button type="submit">Login</button>
      </form>
      <div id="response-message"></div>
    </div>

  );
};

export default Login;