import React from "react";
import Navbar from "../../components/Navbar.js";
import logo3 from "../../img/logo3.png";
import "../../css/reqnum.css";
import Footer from "../../components/Footer.js";
import NAvailable from "./notAvailable.js";
import Available from "./Available.js";

function Reqnum(){
    // var FontAwesome = require('react-fontawesome');
    return(
        <div className="reqbg">
            <Navbar />
            <div className="reqcontent">
                <div className="askcontent">
                    <p className="makeBold">Request a special number</p>
                    <p>Set a custom 10 digit combination for your new number</p>
                    <div className="inputnum">
                        <p>+999</p>
                        <input name="number" placeholder="Enter a 10 digit combination"></input>
                        <button className="inputnum_button" type="button">Check Availability</button>
                    </div>
                </div>
                <NAvailable />
                <Available />
            </div>
            <Footer />
        </div>
    );
}

export default Reqnum;