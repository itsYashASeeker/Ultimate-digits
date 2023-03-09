import React from "react";
import Navbar from "../../components/Navbar";
import "../../css/usernum.css";
import user from "../../img/user.png";
import {Magic} from "magic-sdk";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function Usernum(){

    const navigate = useNavigate();

    let magic = new Magic("sk_live_6E45B0FD150D57DC");

    const render = async() =>{
        const isLoggedIn = await magic.user.isLoggedIn();
        return isLoggedIn;
    }
    if(render()){
        return(
            <div className="reqbg">
                <Navbar />
                <div className="reqcontent">
                    <div className="usernum_1">
                        <p className="my_numbers makeBold inline">My numbers</p>
                        <p className="inline un_total_items">1 Item</p>
                        <p>Numbers owned by you</p>
                        <button className="buttons">Get a new Number</button>
                    </div>
                    <div className="mynumber_card">
                        <img src={user}></img>
                        <p className="makeBold mynumber_1">+999 8888 777 888</p>
                        <p className="makeBold mynumber_2">Not minted</p>
                        <p className="mynumber_3">What does this mean?</p>
                        <button className="buttons mint_button">Mint now</button>
                    </div>
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

export default Usernum;
