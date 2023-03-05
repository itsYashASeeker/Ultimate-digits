import React from "react";
import "../css/Navbar.css";
import logo from "../img/logo3.png";

function getNumber(){
    console.log("get your number");
}

function Navbar(){
    return(
        <div className="navbar2">
            <a href="#">
                <img src={logo} href="#"></img>
            </a>
            <button id="getNumber" type="button" className="getYourNumber" onClick={getNumber}>Get Your Number</button>
            <button id="logout" type="button" className="logout">Log Out</button>
        </div>
    )
}

export default Navbar;