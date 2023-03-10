import Navbar from "../../components/Navbar.js";
import "../../css/thankyou.css";
import metamask from "../../img/Metamask.png";
import "../../css/chooseWallet.css";
import {Magic} from "magic-sdk";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

function ChooseWallet(){
    const navigate = useNavigate();

    let magic = new Magic("sk_live_6E45B0FD150D57DC");
    var [loggedin,SetLogg] = useState("");

    useEffect(() => {
        async function render() {
            const isLoggedIn = await magic.user.isLoggedIn();
            SetLogg(isLoggedIn);
        }
        render();
     }, []);

    if(loggedin==false){
        if(window.ethereum){
            console.log("account exists");
        }
        else{
            alert("install metamask extension!!");
        }
        return(
            <div className="Signupbg">
                <Navbar />
                <div className="wallet_card">
                    <i className="logo_thanks fa-solid fa-wallet"></i>
                    <p className="thank_title">Choose a wallet</p>
                    <p>Once minted your wallet address will be set as the phone number owner.</p>
                    <button className="wallet_button"><img src={metamask}></img><p className="makeBold">Metamask</p></button>
                </div>
            </div>
        )
    }
    else{
        return(
            < Navigate to="/" />
        );
    }
    
}

export default ChooseWallet;