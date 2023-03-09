import React from "react";
import Navbar from "../../components/Navbar.js";
import logo3 from "../../img/logo3.png";
import "../../css/reqnum.css";
import Footer from "../../components/Footer.js";
import NAvailable from "./notAvailable.js";
import Available from "./Available.js";
import {Magic} from "magic-sdk";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState } from "react";


function Reqnum(){

    const navigate = useNavigate();

    let magic = new Magic("sk_live_6E45B0FD150D57DC");

    const render = async() =>{
        const isLoggedIn = await magic.user.isLoggedIn();
        return isLoggedIn;
    }

    
    try{
        if(render()){
            const [number, setNumber] = useState(" ");
            function showStatus(num){
                return(
                    <Available number={num.number} />
                )
            }
            const handleChange = (e) =>{
                setNumber(e.target.value);
            }
            const checkNumber = () =>{
                console.log("I got clicked");
            }
            return(
                <div className="reqbg">
                    <Navbar />
                    <div className="reqcontent">
                        <div id="askcontentid" className="askcontent">
                            <p className="makeBold">Request a special number</p>
                            <p>Set a custom 10 digit combination for your new number</p>
                            <div className="inputnum">
                                <p>+999</p>
                                <input name="number" placeholder="Enter a 10 digit combination" onChange={handleChange}></input>
                                <button type="button" className="inputnum_button" onClick={checkNumber}>Check Availability</button>
                            </div>
                        </div>
                        <NAvailable num="6677 1525 3232" />
                        <Available num="1192 1134 4455"/>
                        <Available num="4467 1494 7854"/>
                    </div>
                    <Footer />
                </div>
            );
        }
    }
    catch(err){
        console.log("hello world");
        return <Navigate to="/signup" />
    }
    

    
}

export default Reqnum;