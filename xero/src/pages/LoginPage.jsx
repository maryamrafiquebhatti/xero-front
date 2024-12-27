import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import loginimg from "../assets/loginimg.png";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSignupRedirect = () => {
    navigate("/signup");
  };

  const handleForgotPasswordRedirect = () => {
    navigate("/forgot-password");
  };
  

  return (
    <div className="two-column-layout">
      {/* Left Column Content (White) */}
      <div className="left-column">
        <div className="left-content">
          <h1>Welcome Back</h1>
          <p>Please enter your email and password to access your account</p>
          <form className="login-form">
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="form-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <button
                type="button"
                className="forgot-password"
                onClick={handleForgotPasswordRedirect}
              >
                Forgot Password?
              </button>
            </div>
            <button type="submit" className="signin-button">
              Sign In
            </button>
          </form>
          <div className="register-section">
            <hr />
            <p>
              Don't have an account?{" "}
              <button
                type="button"
                className="register-now"
                onClick={handleSignupRedirect}
              >
                Register now
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Right Column Content (Blue) */}
      <div className="right-column">
        <div className="right-content">
          <img src={loginimg} alt="Promotional" className="promo-image" />
          <h2 className="right-heading">
            Get everything you want here. This is an All-In-One platform for you
          </h2>
          <p className="right-text">
            Worem ipsum dolor sit amet, consectetur adipiscing elit. Worem ipsum
            dolor sit amet, Worem ipsum dolor sit amet, consectetur adipiscing
            elit. Worem ipsum dolor sit amet, Worem ipsum dolor sit amet,
            consectetur adipiscing elit. Worem ipsum dolor sit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
