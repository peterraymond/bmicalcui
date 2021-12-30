import React from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

const Nav = () => (
    <div>
        <Link to="/">Home</Link>
        &nbsp;&nbsp;
        <Link to="/signup">Signup</Link>
        &nbsp;&nbsp;
        <Link to="/login">Login</Link>
    </div>
);

export default Nav;