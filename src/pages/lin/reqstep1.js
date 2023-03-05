import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../css/reqstep1.css";
import Available from "./Available";

function Reqstep1(){
    return(
        <div className="reqbg">
            <Navbar />
            <div className="reqcontent">
                <div className="step1Content">
                    <p className="makeBold">Your Cart</p>
                    <p>Your phone number is almost registered. Please review your number and make sure everything is correct.</p>
                </div>
                <div className="Available ">
                    <div className="cardBox expandBox ">
                        <p className="r1c1 makeBold">+999 2121 1321 1321</p>
                        <p className="r1c2 makeBold">US$90</p>
                        <p className="r2c1 AvailLabel">Available<i className="fa-solid fa-check"></i></p>
                        <p className="r2c2">Total Due</p>
                        <button type="button" className="like"><i className="fa-regular fa-heart" /></button> 
                        <button className="inputnum_button avail_buynow remove_num">Remove</button>
                    </div>
                </div>
                <button type="button" className="claimMyNumber">Claim My Number</button>
                <div className="step_process">
                    <p className="steps current_process">1</p>
                    
                    <hr className="step_line"></hr>
                    <p className="steps">2</p>
                    
                    <hr className="step_line"></hr>
                    <p className="steps">3</p>

                    <p className="makeBold">Cart</p>
                    <p className="step_desc makeBold">Pay</p>
                    <p className="makeBold">Mint</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Reqstep1;