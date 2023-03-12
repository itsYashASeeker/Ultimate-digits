
import React from "react";
import Navbar from "../../components/Navbar.js";
import signupLogo from "../../img/Vector.png";
import "../../css/Signup.css";
import {Magic} from "magic-sdk";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

function Signup(){

    const navigate = useNavigate();

    
    if(localStorage.getItem("log")!="true"){

        async function connectWallet(){
            document.getElementById("blockscreenid").classList.add("block_screen");
            let magic = new Magic("pk_live_509EF48473539130");
            try{
                if(window.ethereum){
                    console.log("Extension detected");

                    // const accounts1 = await window.ethereum.request({
                    //     method: "eth_requestAccounts",
                    // });
                    // console.log(`Wallet: ${accounts1}`);
                    // const accounts2 = await magic.auth.loginWithCredential();
                    const accounts = await magic.wallet.connectWithUI();
                    // console.log("User: "+accounts2);
                    window.alert("Logged in user: "+accounts[0]);
                    // localStorage.setItem("walletAddress", accounts1[0]);
                    // localStorage.setItem("log", "true");
                    // localStorage.setItem("userEmail", "hello@example.com");
                    // window.alert("Successful Login");
                    // window.location.reload(false);
                }
                else{
                    alert("Meta mask not detected");
                    document.getElementById("blockscreenid").classList.remove("block_screen");
                }
            }
            catch(err){
                window.alert(err);
                document.getElementById("blockscreenid").classList.remove("block_screen");
            }
        }

        function gotosignemail(){
            navigate("/signup-with-email");
        }

        function gotosignPhone(){
            navigate("/signup-with-phone");
        }

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
                            <button className="Signup_option1 Signup_option2" onClick={gotosignPhone}>
                                <i className="margin_right_05rem fa-solid fa-mobile"></i><p>Sign up with phone</p>
                            </button>
                            <button className="Signup_option1 Signup_option2" onClick={connectWallet}>
                                <i className="margin_right_05rem fa-solid fa-wallet"></i><p>Connect your wallet</p>
                            </button>
                            <div className="toLogin">
                                <p>Already have an account?</p>
                                <Link to="/signup-with-email">Log in</Link>
                            </div>
                    </div>
                </div>
                <div id="blockscreenid">
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