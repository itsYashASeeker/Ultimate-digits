
import Home from "./pages/out/Home.js";
import Signup from "./pages/out/Signup.js";
import SignupEmail from "./pages/out/SignupEmail.js";
import VSignupEmail from "./pages/out/VSignEmail.js";
import Reqnum from "./pages/lin/reqnum.js";
import Reqstep1 from "./pages/lin/reqstep1";
import Thankyou from "./pages/lin/thankyou.js";
import Usernum from "./pages/lin/usernum.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup-with-email" element={<SignupEmail />} />
        <Route path="/signup-with-email/verification" element={<VSignupEmail />} />
        <Route path="/request-number" element={<Reqnum/>} />
        <Route path="/request-number/step1" element={<Reqstep1/>} />
        <Route path="/request-number/success" element={<Thankyou/>} />
        <Route path="/my-numbers" element={<Usernum/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
