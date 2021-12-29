import React, { useEffect, useContext, useState } from "react";
import { AccountContext } from "./Account";
import ChangePassword from "./ChangePassword";


export default () => {
  const { getSession } = useContext(AccountContext);

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    getSession().then(() => {
      setLoggedIn(true);
    }).catch(e => {
        console.log("User session undefined", e); 
    });
  }, [getSession, loggedIn]);

  return (
    <div className="settings">
      {loggedIn && (
        <>
          <h2>Password Change</h2>
          <ChangePassword />
        </>
      )}
    </div>
  );
};