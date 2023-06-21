import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignupPage.css";
import facebookIcon from "./facebook-logo.svg";
import googleIcon from "./gmail-logo.svg";
import axios from 'axios'


function SignupPage() {

  
  function handleSubmit(event) {
    event.preventDefault();
    // TODO: Handle form submission logic
    axios.post(
    'https://graduactionproject-backend.onrender.com/api/v1/auth/signup',
    { name, email, password },
      
      ).then(Response=>{console.log(Response.data)})
    
      
      .catch(error => {
        // handle error
        console.log(error);
      });
      window.location.href='/Login';// المفروض تروح لصفحة اللجون
    }



    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleFacebookSignup = () => {window.location.href = "https://www.facebook.com/"; }
    const handleGoogleSignup = () => {window.location.href = "https://www.google.com/accounts";};


  return (
    <div className="signup-container">
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="signup-options"></div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="create-account">
            Create Account
          </button>
          <p className="p-style">OR</p>
          <div className="signup-options">
            <button className="signup-facebook" onClick={handleFacebookSignup}>
              <img src={facebookIcon} alt="Facebook icon" />
              <span>Sign up with Facebook</span>
            </button>
            <button className="signup-gmail" onClick={handleGoogleSignup}>
              <img src={googleIcon} alt="Google icon" />
              <span>Sign up with Google</span>
            </button>
          </div>
          <div className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
        <div  className="login-link">
          Want To reserve ? <Link to="/flightreservation">Reserve Your Trip</Link>
        </div>
      </div>
    </div>
  );
}
export default SignupPage;
