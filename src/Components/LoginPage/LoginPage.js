import React, { useState } from "react";
import "./LoginPage.css";
import axios from 'axios'

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    axios.post(
      'https://graduactionproject-backend.onrender.com/api/v1/auth/login',
      {  email, password },
        
        ).then(Response=>{console.log(Response.data)})
      
        
        .catch(error => {
          // handle error
          console.log(error);
        });
        // window.location.href='/Login';// المفروض تروح للهووووومم
        console.log("Success");
      }

  

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="forgot-password-link">
          <a href="forget">Forgot password?</a>
        </div>
        <button type="submit" className="login">Login</button>
      <div className="register-link">
      Don't have an account? <a href="/">Register</a>
          </div>
      </form>
    </div>
  );
}

export default LoginPage;
