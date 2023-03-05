import Navbar from "../../components/Navbar.js";
import "../../css/thankyou.css";

function Thankyou(){
    return(
        <div className="Signupbg">
            <Navbar />
            <div className="Signupcard thankCard">
                <i className="fa-solid fa-cart-shopping"></i>
                <p className="thank_title">Thank you for your order</p>
                <p>We’ve emailed your receipt to</p>
                <p className="makeBold">atharva.sakharkar@gmail.com</p>
                <button className="gotonum" type="button">Go to my numbers</button>
            </div>
        </div>
    )
}

export default Thankyou;