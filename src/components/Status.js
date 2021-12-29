import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "./Account";
import Pool from "../UserPool";

const Status = () => {
  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      console.log("Session: ", session);
      JSON.stringify(Pool.getCurrentUser());
      setStatus(true);
    }).catch(e => {
        console.log("User session undefined", e);
    });
  }, [getSession, status]);

  return (
    <div>
        <div style={{ fontSize: "24px" }}>
             {status ? <button onClick={logout}>Logout</button> : "Please login"}
        </div>
        <div style={{ fontSize: "12px" }}>
            {/*JSON.stringify(Pool.getCurrentUser())*/}
        </div>
    </div>




  );
};
export default Status;