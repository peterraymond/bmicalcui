import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "./Account";
import Pool from "../UserPool";
import { useNavigate } from 'react-router-dom';

const Status = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      console.log("Session: ", session);
      JSON.stringify(Pool.getCurrentUser());
      setLoggedIn(true);
    }).catch(e => {
        console.log("User session undefined", e);
    });
  }, [getSession, loggedIn]);

  const navigate = useNavigate();
  const routeChange = () =>{ 
    logout();
    navigate('/');
  }


  return (
    <div>
      {(function() {
          if (loggedIn) {
            return <button onClick={routeChange}>Logout</button>;
          } else {
            return "";
          }
        })()}
    </div>
  );
};
export default Status;