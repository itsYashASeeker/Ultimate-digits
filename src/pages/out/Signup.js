
import logo from "../../img/logo3.png";
import Navbar from "../../components/Navbar.js";
import signupLogo from "../../img/Vector.png";
import s1 from "../../img/signup1.png";
import s2 from "../../img/signup2.png";
import s3 from "../../img/signup3.png";
import "../../css/Signup.css";

// function getNumber(){
//     console.log("get your number");
// }

function Signup(){
    return(
        <>
            <div className="Signupbg">
                <Navbar/>
                <div className="Signupcard">
                    <div className="SignupUpperBlock">
                        <img src={signupLogo}></img>
                        <p className="SUB_title">Sign up</p>
                        <p className="SUB_2">Please sign up to continue</p>
                    </div>
                    <div className="SignupLowerBlock">
                        <button className="Signup_option1">
                            <img src={s1}></img>Sign up with email
                        </button>
                        <button className="Signup_option1 Signup_option2 Signup_option21">
                            <img src={s2}></img>Sign up with phone
                        </button>
                        <button className="Signup_option1 Signup_option2">
                            <img src={s3}></img>Connect your wallet
                        </button>
                        <div className="toLogin">
                            <p>Already have an account?</p>
                            <a href="#">Log in</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default Signup;