
import logo from "../../img/logo3.png";
import Navbar from "../../components/Navbar.js";
import signupLogo from "../../img/Vector.png";
import s1 from "../../img/signup1.png";
import s2 from "../../img/signup2.png";
import s3 from "../../img/signup3.png";
import "../../css/Signup.css";
import {Magic} from "magic-sdk";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

function Signup(){

    const navigate = useNavigate();

    let magic = new Magic("pk_live_15D99720B6DDCD0F");

    function gotosignemail(){
        navigate("/signup-with-email");
    }
    if(localStorage.getItem("log")!=true){
        return(
            <>
                <div className="Signupbg">
                    <Navbar/>
                    <div className="Signupcard">
                            <img src={signupLogo}></img>
                            <p className="SUB_title">Sign up</p>
                            <p className="SUB_2 margin_bottom_1rem">Please sign up to continue</p>
                            <button className="margin_top_1rem purple_gradient_button Signup_option1" onClick={gotosignemail}>
                                <i className="margin_right_05rem fa-solid fa-envelope"></i><p>Sign up with email</p>
                            </button>
                            <button className="Signup_option1 Signup_option2">
                                <i className="margin_right_05rem fa-solid fa-mobile"></i><p>Sign up with phone</p>
                            </button>
                            <button className="Signup_option1 Signup_option2">
                                <i className="margin_right_05rem fa-solid fa-wallet"></i><p>Connect your wallet</p>
                            </button>
                            <div className="toLogin">
                                <p>Already have an account?</p>
                                <Link to="/signup-with-email">Log in</Link>
                            </div>
                    </div>
                </div>
            </>
        )
    }
    else{
        return(
            < Navigate to="/" />
        );
    } 
}

export default Signup;