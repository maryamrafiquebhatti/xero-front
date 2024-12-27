import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/signup";
import ForgotPassword from "./pages/forgot-password";
import OTPPage from "./pages/otp-page";
import NewPage from "./pages/new-page"




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp-page" element={<OTPPage />} />
        <Route path="/new-page" element={<NewPage />} />





      </Routes>
    </Router>
  );
};

export default App;
