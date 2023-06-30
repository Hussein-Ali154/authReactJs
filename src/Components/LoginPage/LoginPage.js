import React, { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import axios from 'axios'

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]=useState(null);
  const history=useHistory();

  const handleSubmit = async(e) => {
    e.preventDefault();
  
      
      try {
        const response = await axios.post('https://graduactionproject-backend.onrender.com/api/v1/auth/login', { email, password });
        localStorage.setItem('token', response.data.token);
        history.push('/home');
      } catch (error) {
        setError('Invalid email or password');
      }
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
        {error && <p>{error}</p>}
        <button type="submit" className="login">Login</button>
        <div className="register-link">
        Don't have an account? <Link to ="/">Register</Link>
          </div>
      </form>
    </div>
  );
}

export default LoginPage;
