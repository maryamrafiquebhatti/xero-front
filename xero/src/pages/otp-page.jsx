import React from "react";
import "./otp-page.css";
import forgot from "../assets/forgot.png";
import { useNavigate } from "react-router-dom";



const OTPPage = () => {
  const navigate = useNavigate();

  const handleVerify = () => {
    navigate("/new-page");
  };

  return (
    <div className="two-column-layout">
      {/* Left Column Content (White) */}
      <div className="left-column">
        <div className="left-content">
          <h1>Forgot Password</h1>
          <p>We have sent a code to <strong>Example@gmail.com</strong></p>
          <div className="otp-container">
            <input type="text" maxLength="1" className="otp-input" />
            <input type="text" maxLength="1" className="otp-input" />
            <input type="text" maxLength="1" className="otp-input" />
            <input type="text" maxLength="1" className="otp-input" />
          </div>
            <button className="verify-button" onClick={handleVerify}>
              Verify Now
            </button>          
            <p className="resend-text">
              Didn’t receive any code? <button className="resend-button">Resend it</button>
            </p>
        </div>
      </div>
      {/* Right Column Content (Blue) */}
            <div className="right-column">
              <div className="right-content">
                <img src={forgot} alt="Signup Promotional" className="promo-image" />
                <h2 className="right-heading">
                  Get everything you want here. This is an All-In-One platform for you
                </h2>
                <p className="right-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        );
      };


export default OTPPage;
