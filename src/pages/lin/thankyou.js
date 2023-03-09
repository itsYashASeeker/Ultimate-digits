import Navbar from "../../components/Navbar.js";
import "../../css/thankyou.css";
import {Magic} from "magic-sdk";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function Thankyou(){

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
                <div className="Signupcard thankCard">
                    <i className="logo_thanks fa-solid fa-cart-shopping"></i>
                    <p className="thank_title">Thank you for your order</p>
                    <p>We’ve emailed your receipt to</p>
                    <p className="makeBold">yashkc6432@gmail.com</p>
                    <button className="margin_top_1rem purple_gradient_button confirm_button_mint" type="button">Go to my numbers</button>
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