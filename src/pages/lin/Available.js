import React from "react";
import "../../css/reqnum.css";

function Available(props){
    return(
        <div className="Available">
            <p className="availHeader makeBold">Available numbers</p>
            <div className="cardBox">
                <p className="r1c1 makeBold">+999 {props.num}</p>
                <p className="r1c2 makeBold">US$90</p>
                <p className="r2c1 AvailLabel">Available<i className="fa-solid fa-check"></i></p>
                <p className="r2c2">+999</p>
                <button type="button" className="like"><i className="fa-regular fa-heart" /></button> 
                <button className="inputnum_button avail_buynow">Buy now</button>
            </div>
        </div>
    );
}

export default Available;