// require("dotenv").config();

import React from "react";
import "../../css/Home.css";
import iphone from "../../img/iphone.png";
import logo from "../../img/logo.png";
import call1 from "../../img/call1.png";
import lowerArc from "../../img/lower_arc.png"; 
import {Magic} from "magic-sdk";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
require("dotenv").config();

function Home(){

    const navigate = useNavigate();
    

    async function render() {
        let magic = new Magic("pk_live_15D99720B6DDCD0F");
        const isLoggedIn = await magic.user.isLoggedIn();
        if(isLoggedIn==true){
            localStorage.setItem("log", "true");
        }
        else{
            localStorage.setItem("log","false");
        }
    }
    render();

    localStorage.setItem("cnum", "2121 1321 1321");  

    const getNumber = () =>{
        console.log(localStorage.getItem("log"));
        if(localStorage.getItem("log")==="true"){
            console.log("Logged in");
            navigate("/request-number");
        }
        else{
            console.log("logged out");
            navigate("/signup");
        }
    }

    return(
        <div className="Homebg">
            <div className="navbar">
                <a href="#">
                    <img src={logo} href="#"></img>
                </a>
                <button type="button" onClick={getNumber}>Get Your Number</button>
            </div>
            <div className="Upper">
                <div className="label_Upper">
                    <img src={call1}></img>
                    <p>It's your number. Own it.</p>
                </div>
                <div className="label_Upper2">
                    <p className="l_U2_1">Your Web3</p>
                    <p className="l_U2_2">Mobile Number</p>
                </div>
                <div className="label_Upper3"><p>Join the revolution of seamless web3 communication</p></div>
                <button type="button" className="button_Upper4" onClick={getNumber}>Get Your Number</button>
            </div>
            <div className="Lower">
                <img src={lowerArc} className="lower_arc"></img>
                <div className="iphone_bottom">
                    <img src={iphone}></img>
                </div>
            </div>
        </div>
    )
}

export default Home;