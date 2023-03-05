
import logo from "../../img/logo3.png";
import Navbar from "../../components/Navbar.js";
import signupLogo from "../../img/Vector.png";
import s1 from "../../img/emailLogo2.png";
import s2 from "../../img/signup1.png"
import "../../css/SignupEmail.css";
import "../../css/VSignupEmail.css";

function getNumber(){
    console.log("get your number");
}

function VSignupEmail(){

    return(
        <>
            <div className="SignupEmailbg">
                <Navbar/>
                <div className="SignupEmailcard">
                    <div className="VSignupEmailUpperBlock">
                        <img src={s1}></img>
                        <p className="VSUBEmail_title">Please verify your email</p>
                        <p className="VSUBEmail_2">You are almost there! We sent an email to</p>
                        <p className="VSUBEmail_2 makeBold">yashkc6432@gmail.com</p>
                        <div className="VSUBEmail_3">
                            <p className="VSUBEmail_2">Just click on the link in that email to complete your sign if you don’t see it, you may need to check your spam folder.</p>
                            <p className="VSUBEmail_2"> Still can’t find the email?</p>
                        </div>
                    </div>
                    <button className="SignupEmail_option1">
                        Resend Email
                    </button>
                    <div className="toEmailLogin">
                        <p>Need help?</p>
                        <a href="#">Contact us</a>
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default VSignupEmail;