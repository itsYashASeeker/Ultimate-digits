import Navbar from "../../components/Navbar.js";
import "../../css/thankyou.css";
import {Magic} from "magic-sdk";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

function Thankyou(){

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
        function gotonum(){
            navigate("/my-numbers");
        }
        return(
            <div className="Signupbg">
                <Navbar />
                <div className="Signupcard thankCard">
                    <i className="logo_thanks fa-solid fa-cart-shopping"></i>
                    <p className="thank_title">Thank you for your order</p>
                    <p>We’ve emailed your receipt to</p>
                    <p className="makeBold">yashkc6432@gmail.com</p>
                    <button type="button" className="margin_top_1rem purple_gradient_button confirm_button_mint" onClick={gotonum}>Go to my numbers</button>
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

export default Thankyou;