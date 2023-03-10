import Navbar from "../../components/Navbar.js";
import "../../css/Signup.css";
import "../../css/MintConfirm.css";
import {Magic} from "magic-sdk";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

function MintConfirm(){

    const navigate = useNavigate();

    // let magic = new Magic("sk_live_6E45B0FD150D57DC");
    // var [loggedin,SetLogg] = useState("");

    // useEffect(() => {
    //     async function render() {
    //         const isLoggedIn = await magic.user.isLoggedIn();
    //         SetLogg(isLoggedIn);
    //     }
    //     render();
    //  }, []);

    if(localStorage.getItem("log")==="true"){
        function mint(){
            navigate("/request-number/step3/mint-in-progress");
        }
        return(
            <div className="Signupbg">
                <Navbar />
                <div className="wallet_card">
                    <i className="logo_thanks fa-solid fa-rotate"></i>
                    <p className="thank_title">Mint your Number</p>
                    <p>You are minting the following number</p>
                    <p className="makeBold margin_bottom_1rem">+999 8888 777 888</p>
                    <p>Number owner will be assigned to the following wallet address:</p>
                    <p className="makeBold margin_top_1rem">0x29F6E49a615FcB9A113769879a9 efDD9797a2f19</p>
                    <button className="margin_top_1rem purple_gradient_button confirm_button_mint" onClick={mint}>Confirm</button>
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

export default MintConfirm;