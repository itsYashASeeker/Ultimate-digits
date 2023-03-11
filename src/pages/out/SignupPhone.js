
import React from "react";
import logo from "../../img/logo3.png";
import Navbar from "../../components/Navbar.js";
import signupLogo from "../../img/Vector.png";
import s1 from "../../img/emailLogo2.png";
import s2 from "../../img/signup2.png";
import "../../css/SignupEmail.css";
import {Magic} from "magic-sdk";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import allData from "../../allData.js";
require("dotenv").config();

function SignupPhone(){

    var [num, setNum] = useState("");

    let magic = new Magic("pk_live_15D99720B6DDCD0F");

    const handleLogin = async(event) =>{
        event.preventDefault();
        if(num.length>=12 && num.length<=14 && num[0]=="+"){
            try{
                const DID = await magic.auth.loginWithSMS({
                    phoneNumber: num,
                });
                localStorage.setItem("log", "true");
                localStorage.setItem("userEmail", "hello@example.com");
                window.alert("Successful Login");
                window.location.reload(false);
                
            }
            catch(err){
                window.alert("Some error occured, please try again...");
            }
        }
        else{
            window.alert("Invalid phone number");
        }
        console.log(num);
    }

    function handleChange(e){
        setNum(e.target.value);
    }

    if(localStorage.getItem("log")!="true"){
        return(
            <div className="SignupEmailbg">
                <Navbar/>
                <div className="SignupEmailcard">
                    <div className="SignupEmailUpperBlock">
                        <i className="fa-solid fa-mobile phoneLogoSign"></i>
                        <p className="SUBEmail_title">Sign up {num}</p>
                        <p className="SUBEmail_2">Please sign up to continue</p>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="SignupEmailLowerBlock">
                            <div className="SignupEmailUsername1">
                                <label>Phone Number</label>
                                <input name="phone_number" placeholder="Enter your phone number" onChange={handleChange}></input>
                            </div>
                            <button type="submit" className="margin_top_1rem purple_gradient_button confirm_button_mint">
                                Sign up
                            </button>
                            <div className="toEmailLogin">
                                <p>Already have an account?</p>
                                <Link to="/signup-with-phone">Log in</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
    else{
        return(
            < Navigate to="/" />
        );
    }
}

export default SignupPhone;