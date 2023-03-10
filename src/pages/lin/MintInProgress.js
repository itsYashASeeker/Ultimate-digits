import Navbar from "../../components/Navbar.js";
import "../../css/MintConfirm.css";
import {Magic} from "magic-sdk";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

function MintInProgress(){

    const navigate = useNavigate();

    let magic = new Magic("sk_live_6E45B0FD150D57DC");

    const render = async() =>{
        const isLoggedIn = await magic.user.isLoggedIn();
        return isLoggedIn;
    }   
    if(render()){
        return(
            <div className="Signupbg">
                <Navbar />
                <div className="wallet_card">
                    <i className="logo_thanks fa-solid fa-circle-check"></i>
                    <p className="thank_title">Minting in progress</p>
                    <p className="margin_bottom_1rem">Your number is now being deployed into the blockchain and your crypto-wallet.</p>
                    <p className="margin_top_1rem">The transaction is being completed on the Skale blockchain. When the transaction is complete your domain will show on the blockchain</p>
                    <button className="margin_top_1rem purple_gradient_button confirm_button_mint">Back to my numbers</button>
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

export default MintInProgress;