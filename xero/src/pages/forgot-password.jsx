import React from "react";
import { useNavigate } from "react-router-dom";
import "./forgot-password.css";
import forgot from "../assets/forgot.png";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="two-column-layout">
      {/* Left Column Content (White) */}
      <div className="left-column">
        <div className="left-content">
          <h1>Forgot Password</h1>
          <p>Please enter your registered Email to reset your password</p>
          <form className="login-form">
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <button
              type="button"
              className="signin-button"
              onClick={() => navigate("/otp-page")} 
            >
              Send OTP
            </button>
            <button
              type="button"
              className="signin-button back-to-login-button"
              onClick={() => navigate("/")}
            >
              Back to Login
            </button>
          </form>
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

export default ForgotPassword;
