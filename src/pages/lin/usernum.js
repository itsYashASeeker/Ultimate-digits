import React from "react";
import Navbar from "../../components/Navbar";
import "../../css/usernum.css";
import user from "../../img/user.png";
import {Magic} from "magic-sdk";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState,useEffect } from "react";

function Usernum(){

    const navigate = useNavigate();

    // var [loggedin,SetLogg] = useState("");

    // useEffect(() => {
    //     async function render() {
    //         const isLoggedIn = await magic.user.isLoggedIn();
    //         SetLogg(isLoggedIn);
    //     }
    //     render();
    //  }, []);

    if(localStorage.getItem("log")==="true"){
        function getNum(){
            navigate("/request-number");
        }
        function gotoWallet(){
            var popupbgid = document.getElementById("popupbgid");
            popupbgid.classList.add("show_popup");
        }
        function gotominting(){
            navigate("/request-number/step3/choose-wallet");
        }
        return(
            <>
            <div className="reqbg">
                <Navbar />
                <div className="reqcontent">
                    <div className="usernum_1">
                        <p className="my_numbers makeBold inline">My numbers</p>
                        <p className="inline un_total_items">1 Item</p>
                        <p>Numbers owned by you</p>
                        <button type="button" className="buttons" onClick={getNum}>Get a new Number</button>
                    </div>
                    <div className="mynumber_card">
                        <img src={user}></img>
                        <p className="makeBold mynumber_1">+999 8888 777 888</p>
                        <p className="makeBold mynumber_2">Not minted</p>
                        <p className="mynumber_3">What does this mean?</p>
                        <button type="button" className="buttons mint_button" onClick={gotoWallet}>Mint now</button>
                    </div>
                </div>
                <div id="popupbgid" className="popupbg">
                    <div className="Signupcard popup_card">
                        <img src={user}></img>
                        <p className="thank_title">Mint domain on Skale</p>
                        <p className=" margin_bottom_1rem">Minting and managing numbers on Skale is free.</p>
                        <p> Not all apps currently support Ultimate digits number resolution</p>
                        <p className="margin_top_1rem">Number management and configuration will be available soon.</p>
                        <button className="margin_top_1rem purple_gradient_button" onClick={gotominting} >Continue</button>
                        <Link to="/my-numbers"><p className="learnmoreskale">Learn more about Skale</p></Link>
                    </div>
                </div>
            </div>
            
            </>
        );
    }
    else{
        return(
            < Navigate to="/" />
        );
    }
    
}

export default Usernum;
