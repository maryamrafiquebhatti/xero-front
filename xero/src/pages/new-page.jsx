import React from "react";
import { useNavigate } from "react-router-dom";
import "./new-page.css";
import forgot from "../assets/forgot.png";

const NewPage = () => {
  const navigate = useNavigate();

  const handleConfirm = (event) => {
    event.preventDefault(); 
    navigate("/account-created"); 
  };

  return (
    <div className="two-column-layout">
      {/* Left Column Content (White) */}
      <div className="left-column">
        <div className="left-content">
          <h1>Enter New Password</h1>
          <p>Password must be different from the previous</p>
          <form className="login-form" onSubmit={handleConfirm}>
            <div className="form-group">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Re-enter Password" required />
            </div>
            <button type="submit" className="signin-button">
              Confirm
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

export default NewPage;
