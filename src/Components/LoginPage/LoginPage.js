import React, { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]=useState(null);
  const history=useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://graduactionproject-backend.onrender.com/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Store the token in local storage
      localStorage.setItem('token', data.token);
      history.push('/dashboard');
    })
    .catch(error => {
      // Handle error
      console.error('There was a problem with the fetch operation:', error);
      if (error.message=== 'Email not found'){
        setError('Email not found. Please Signup first.');}
        else{
          setError('Invalid email or Password');
        }
      
    });
  };


  

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
            required
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
            required
          />
        </div>
        <div className="forgot-password-link">
        <Link to="/forgot">ForgetPassword</Link>
        </div>
        {error && <p style={{color:'red',textAlign:'center'}}>{error}</p>}
        <button type="submit" className="login">Login</button>
        <div className="register-link">
        Don't have an account? <Link to ="/">Register</Link>
          </div>
      </form>
    </div>
  );
}

export default LoginPage;
