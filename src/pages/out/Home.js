import React from "react";
import "../../css/Home.css";
import iphone from "../../img/iphone.png";
import logo from "../../img/logo.png";
import call1 from "../../img/call1.png";
import lowerArc from "../../img/lower_arc.png"; 

function getNumber(){
    console.log("get your number");
}

function Home(){
    return(
        <div className="Homebg">
            <div className="navbar">
                <a href="#">
                    <img src={logo} href="#"></img>
                </a>
                <button type="button" onClick={getNumber}>Get Your Number</button>
            </div>
            <div className="Upper">
                <div className="label_Upper">
                    <img src={call1}></img>
                    <p>It's your number. Own it.</p>
                </div>
                <div className="label_Upper2">
                    <p className="l_U2_1">Your Web3</p>
                    <p className="l_U2_2">Mobile Number</p>
                </div>
                <div className="label_Upper3"><p>Join the revolution of seamless web3 communication</p></div>
                <button className="button_Upper4">Get Your Number</button>
            </div>
            <div className="Lower">
                {/* <div className="Lowerarc">
                    <span></span>
                </div> */}
                <img src={lowerArc} className="lower_arc"></img>
                <div className="iphone_bottom">
                    <img src={iphone}></img>
                </div>
            </div>
        </div>
    )
}

export default Home;