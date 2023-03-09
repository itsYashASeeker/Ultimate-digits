import React from "react";
import "../css/Navbar.css";
import logo from "../img/logo3.png";
import {Magic} from "magic-sdk";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function getNumber(){
    console.log("get your number");
}

function Navbar(){

    let magic = new Magic("sk_live_6E45B0FD150D57DC");

    const render = async() =>{
        const isLoggedIn = await magic.user.isLoggedIn();
        return isLoggedIn;
    }

    const navigate = useNavigate();

    const handleLogout = async() => {
        await magic.user.logout();
        navigate("/signup");
    };

    const navtosign = () =>{
        navigate("/");
    }
    if(render()){
        console.log("world");
        return(
            <div className="navbar2">
                <a href="#">
                    <img src={logo}></img>
                </a>
                <button id="logout" type="button" className="logout" onClick={handleLogout} >Log Out</button>
            </div>
        )
    }
    else{
        return(
            <div className="navbar2">
                <a href="#">
                    <img src={logo}></img>
                </a>
                <Link to="/">
                    <button id="getNumber" type="button" className="getYourNumber">Get Your Number</button>
                </Link>
            </div>
        )
    }

}

export default Navbar;