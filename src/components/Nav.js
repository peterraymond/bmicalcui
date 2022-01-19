import React from "react";
import { Link} from 'react-router-dom';

const Nav = () => (
    <div>
        <Link to="/">Home</Link>
        &nbsp;&nbsp;
        <Link to="/signup">Signup</Link>
        &nbsp;&nbsp;
        <Link to="/login">Login</Link>
        &nbsp;&nbsp;
        <Link to="/calc-list">Calcs</Link>
    </div>
);

export default Nav;