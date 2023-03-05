
import logo from "../../img/logo3.png";
import Navbar from "../../components/Navbar.js";
import signupLogo from "../../img/Vector.png";
import s1 from "../../img/emailLogo2.png";
import s2 from "../../img/signup1.png";
import "../../css/SignupEmail.css";
function getNumber(){
    console.log("get your number");
}


function SignupEmail(){
    return(
        <>
            <div className="SignupEmailbg">
                <Navbar/>
                <div className="SignupEmailcard">
                    <div className="SignupEmailUpperBlock">
                        <img src={s1}></img>
                        
                        <p className="SUBEmail_title">Sign up</p>
                        <p className="SUBEmail_2">Please sign up to continue</p>
                    </div>
                    <div className="SignupEmailLowerBlock">
                        <div className="SignupEmailUsername1">
                            <label>Email</label>
                            <input name="username" placeholder="Enter your email"></input>
                        </div>
                        <div className="SignupEmailUsername1 godown">
                            <label>Set Password</label>
                            <input name="password" type={"password"} placeholder="******"></input>
                        </div>
                        <button className="SignupEmail_option1">
                            Sign up
                        </button>
                        <div className="toEmailLogin">
                            <p>Already have an account?</p>
                            <a href="#">Log in</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default SignupEmail;