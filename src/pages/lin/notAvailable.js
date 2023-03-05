import React from "react";
import "../../css/reqnum.css";

function NAvailable(){
    return(
        <div className="cardBox">
            <p className="r1c1 makeBold">+999 2121 2121 2121</p>
            <p className="r1c2 makeBold">US$0</p>
            <p className="r2c1 notAvailLabel">Not Available<i className="fa-solid fa-triangle-exclamation" /></p>
            <p className="r2c2">+999</p>
            <button type="button" className="like"><i className="fa-regular fa-heart" /></button> 
        </div>
    );
}

export default NAvailable;