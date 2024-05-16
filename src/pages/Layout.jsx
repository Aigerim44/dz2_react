import React from 'react';
import NavBar from "../components/NavBar.jsx";
import {Outlet} from "react-router-dom";

function Layout(props) {
    return (
        <div>
            <header><NavBar/></header>
            <main><Outlet/></main>
        </div>
    );
}

export default Layout;