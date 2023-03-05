import React from "react";
import Navbar from "../../components/Navbar";
import "../../css/usernum.css";
import user from "../../img/user.png";

function Usernum(){
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

export default Usernum;
