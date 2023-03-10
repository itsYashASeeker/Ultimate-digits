import React from "react";
import "../css/Navbar.css";
import logo from "../img/logo3.png";
import {Magic} from "magic-sdk";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function Navbar(){

    let magic = new Magic("sk_live_6E45B0FD150D57DC");
    var isLoggedIn;
    const navigate = useNavigate();

    const handleLogout = async() => {
        await magic.user.logout();
        navigate("/signup");
    };

    const render = async() =>{
        isLoggedIn = await magic.user.isLoggedIn();
    }
    render();

    function reqnum(){
        navigate("/request-number");
    }

    if(isLoggedIn){
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