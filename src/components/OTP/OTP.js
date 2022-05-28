import React, { useState } from "react";
import CountDownAnimation from "./CountDownAnimation";
import GenerateOTP from "./GenerateOTP";
import InputOTP from "./InputOTP";
import "./OTP.scss";

const OTP = () => {
  const [orgOTPParent, setOrgOTPParent] = useState("");
  const [userOTPParent, setuserOTPParent] = useState("");
  const [isDisableBtn, setIsDisableBtn] = useState(false);
  const handleSubmitOTP = () => {
    if (!orgOTPParent) {
      alert("Please genarate an OTP ...");
      return;
    }
    if (!userOTPParent) {
      alert("Please enter an OTP ...");
      return;
    }
    if (+orgOTPParent === +userOTPParent) {
      alert("Corret OTP");
    } else {
      alert("Wrong OTP");
    }
  };
  return (
    <div className="OTP-parent-container">
      <GenerateOTP setOrgOTPParent={setOrgOTPParent} />
      <InputOTP
        setuserOTPParent={setuserOTPParent}
        handleSubmitOTP={handleSubmitOTP}
        isDisableBtn={isDisableBtn}
        setIsDisableBtn={setIsDisableBtn}
      />
    </div>
  );
};
export default OTP;
