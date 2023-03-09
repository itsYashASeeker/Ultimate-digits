import Navbar from "../../components/Navbar.js";
import "../../css/thankyou.css";
import metamask from "../../img/Metamask.png";
import "../../css/chooseWallet.css";
import {Magic} from "magic-sdk";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function ChooseWallet(){
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