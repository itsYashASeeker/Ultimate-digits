
import React from "react";
import Home from "./pages/out/Home.js";
import Signup from "./pages/out/Signup.js";
import SignupEmail from "./pages/out/SignupEmail.js";
import VSignupEmail from "./pages/out/VSignEmail.js";
import Reqnum from "./pages/lin/reqnum.js";
import Reqstep1 from "./pages/lin/reqstep1";
import Thankyou from "./pages/lin/thankyou.js";
import Usernum from "./pages/lin/usernum.js";
import ChooseWallet from "./pages/lin/chooseWallet.js";
import MintConfirm from "./pages/lin/MintConfirm.js";
import MintInProgress from "./pages/lin/MintInProgress.js";
import MyContract from "./pages/smart.js";
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
        <Route path="/request-number/step2/success" element={<Thankyou/>} />
        <Route path="/my-numbers" element={<Usernum/>} />
        <Route path="/request-number/step3/choose-wallet" element={<ChooseWallet />} />
        <Route path="/request-number/step3/confirm-mint" element={<MintConfirm />} />
        <Route path="/request-number/step3/mint-in-progress" element={<MintInProgress />} />
        <Route path="/contract" element={<MyContract/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
