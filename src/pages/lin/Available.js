import React from "react";
import "../../css/reqnum.css";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Available(props){
    const navigate = useNavigate();
    function buynow(){
        navigate("/request-number/step1");
    }
    
    return(
        <div className="Available">
            <div className="cardBox">
                <p className="r1c1 makeBold">+999 {props.num}</p>
                <p className="r1c2 makeBold">US$90</p>
                <p className="r2c1 AvailLabel">Available<i className="fa-solid fa-check"></i></p>
                <p className="r2c2">+999</p>
                <button type="button" className="like"><i className="fa-regular fa-heart" /></button> 
                <button type="button" className="inputnum_button avail_buynow" onClick={buynow}>Buy now</button>
            </div>
        </div>
    );
}

export default Available;