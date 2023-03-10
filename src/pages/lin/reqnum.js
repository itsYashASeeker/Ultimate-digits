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
import { useState, useEffect } from "react";
import allData from "../../allData.js";

function Reqnum(){

    let magic = new Magic("pk_live_15D99720B6DDCD0F");
    var [loggedin,SetLogg] = useState("");
    var [number, setNumber] = useState();
    var [naActive, setnaActive] = useState(false);
    var [aActive, setaActive] = useState(false);
    var [foundNum, setFoundNum] = useState(allData);

    // useEffect(() => {
    //     async function render() {
    //         const isLoggedIn = await magic.user.isLoggedIn();
    //         SetLogg(isLoggedIn);
    //     }
    //     render();
    //  }, []);

    if(localStorage.getItem("log")==="true"){
        
        function showStatus(num){
            return(
                <Available num={num.mnum} />
            )
        }
        const handleChange = (e) =>{
            setNumber(e.target.value);
        }
        const checkNumber = () =>{
            setnaActive(true);
            for(var i=0;i<allData.length;i++){
                if(allData[i].mnum==number){
                    console.log("yes");
                    setFoundNum([{"mnum": number}]);
                    setnaActive(false);
                    break; 
                }
            }
            setaActive(true);
        }
        return(
            <div className="reqbg">
                <Navbar />
                <div id="reqcontentid" className="reqcontent">
                    <div id="askcontentid" className="askcontent">
                        <p className="makeBold">Request a special number</p>
                        <p>Set a custom 10 digit combination for your new number</p>
                        <div className="inputnum">
                            <p>+999</p>
                            <input name="number" placeholder="Enter a 10 digit combination" onChange={handleChange}></input>
                            <button type="button" className="inputnum_button" onClick={checkNumber}>Check Availability</button>
                        </div>
                    </div>
                    {naActive ? <NAvailable num={number} /> : null}
                    {aActive ? <p className="availHeader makeBold">Available numbers</p> : null}
                    {aActive ? (foundNum.map(showStatus)) : null}
                </div>
                <Footer />
            </div>
        );
    }
    else{
        return <Navigate to="/" />
    }  
}

export default Reqnum;