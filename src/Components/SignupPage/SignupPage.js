import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignupPage.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error,setError]=useState(null);
  const  history = useHistory();

  const handleSubmit =(e)=> {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = existingUsers.some((user) => user.email === email);
    if (userExists) {
      setError('User with this email already exists');
      return;
    }
    const newUser = {name, email, password };
    localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));

    // Make a POST request to the API endpoint with the user's email and password data
    fetch('https://graduactionproject-backend.onrender.com/api/v1/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, email, password })
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
    });
  };




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
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

<label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {error && <p style={{color:'red',textAlign:'center'}}>{error}</p>}
          <button type="submit" className="create-account">
            Create Account
          </button>
          <div className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
        <div  className="login-link">
          Want To reserve ? <Link to="/reset-code">Reserve Your Trip</Link>
        </div>
      </div>
    </div>
  );
}
export default SignupPage;
