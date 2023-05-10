import React from 'react';
import "./Navbar.css";
import logo from "../pics/logo.png"

const BASE_URL = "https://svgrom.com/index.php?route=common/home"

const NavBar = () => {
    return (
        <div className="main-nav">
            <div className="top-row">
            <a className="logo"
                href={BASE_URL}>
                <img src={logo}></img>
            </a>

            </div>
        </div>
    );
};

export default NavBar;