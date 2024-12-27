import React from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import loginimg from "../assets/loginimg.png";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="two-column-layout">
      {/* Left Column Content (White) */}
      <div className="left-column">
        <div className="left-content">
          <h1>Register Now</h1>
          <p>Please enter your details to register your account</p>
          <form className="login-form">
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="phone" placeholder="Phone" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Re-enter Password" required />
            </div>
            <button type="submit" className="signin-button">Sign Up</button>
          </form>
        </div>
      </div>

      {/* Right Column Content (Blue) */}
      <div className="right-column">
        <div className="right-content">
          <img src={loginimg} alt="Signup Promotional" className="promo-image" />
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

export default Signup;
