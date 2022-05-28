import { useRef, useState } from "react";
import OtpInput from "react-otp-input";
import CountDownAnimation from "./CountDownAnimation";

const InputOTP = (props) => {
  const childRef = useRef();
  const [otp, setOTP] = useState("");
  const handleSubmitOTP = () => {
    props.handleSubmitOTP();
  };
  const handleChange = (otp) => {
    console.log(">>>check value handle OTP", otp);
    setOTP(otp);
    props.setuserOTPParent(otp);
  };
  const handleClearBtn = () => {
    childRef.current.restTimer();
    console.log("check ref :", childRef);
  };
  return (
    <div className="input-otp-container">
      <div className="title">Enter verification code</div>
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
        separator={<span>-</span>}
        inputStyle={"input-customize"}
      />
      <div className="timer">
        {/* <CountDown setIsDisableBtn={props.setIsDisableBtn} /> */}
        <CountDownAnimation
          ref={childRef}
          setIsDisableBtn={props.setIsDisableBtn}
        />
      </div>
      <div className="action">
        <button
          className="clear"
          onClick={() => handleClearBtn()}
          disabled={!props.isDisableBtn}
        >
          Clear
        </button>
        <button
          className="confirm"
          onClick={() => handleSubmitOTP()}
          disabled={props.isDisableBtn}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
export default InputOTP;
