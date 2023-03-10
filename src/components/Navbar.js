import React from "react";
import "../css/Navbar.css";
import logo from "../img/logo3.png";
import {Magic} from "magic-sdk";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

    
function Navbar(){

    const navigate = useNavigate();

    let magic = new Magic("pk_live_15D99720B6DDCD0F");
    var [loggedin,SetLogg] = useState("");

    useEffect(() => {
        async function render() {
            const isLoggedIn = await magic.user.isLoggedIn();
            SetLogg(isLoggedIn);
        }
        render();
     }, []);

    const handleLogout = async() => {
        await magic.user.logout();
        localStorage.setItem("log", false);
        navigate("/signup");
    };

    // const render = async() =>{
    //     loggedin = await magic.user.isLoggedIn();
    // }
    // render();

    function reqnum(){
        navigate("/request-number");
    }
    if(loggedin==true){
        return(
            <div className="navbar2">
                <Link to="/">
                    <img src={logo}></img>
                </Link>
                <button id="logout" type="button" className="logout" onClick={handleLogout} >Log Out</button>
            </div>
        )
    }
    else{
        return(
            <div className="navbar2">
                <Link to="/">
                    <img src={logo}></img>
                </Link>
                <button id="getNumber" type="button" className="getYourNumber" onClick={reqnum}>Get Your Number</button>
            </div>
        )
    }

}

export default Navbar;