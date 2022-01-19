import React, { useState, useContext } from "react";
import { AccountContext } from "./Account";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { authenticate } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();

    authenticate(email, password)
      .then((result) => {
        console.log("Logged in!!", result);

        var accessToken = result.getAccessToken().getJwtToken();
        console.log("accessToken: ", accessToken);



        /* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer */
        var idToken = result.idToken.jwtToken;
        console.log("idToken: ", idToken);

        //UserContext.Provider.


        document.getElementById("response-message").innerHTML = "Success: <br/>" + JSON.stringify(result);
      })
      .catch((err) => {
        console.error("Failed to login", err);
        document.getElementById("response-message").innerHTML = err.message;
      });
  };

  return (
    <div >
      <h2>Login</h2>
      <form onSubmit={onSubmit} >
        <label htmlFor="email">Email</label>
        <input autoComplete="on" 
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
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