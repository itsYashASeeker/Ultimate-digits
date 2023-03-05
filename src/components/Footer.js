import React from "react";
import logo3 from "../img/logo3.png";
import "../css/footer.css"


function Footer(){
    // var FontAwesome = require('react-fontawesome');
    return(
        <footer>
            <img src={logo3}></img>
            <p>© 2023 Ultimate digits inc. All rights reserved.</p>
        </footer>
    );
}

export default Footer;