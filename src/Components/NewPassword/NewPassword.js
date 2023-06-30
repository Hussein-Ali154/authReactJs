import React, { useState } from 'react';
import './NewPassword.css';

function NewPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    // TODO: Send a request to update the user's password
  };

  return (
    <div className="reset-page-container">
      <h2 className="reset-page-title">New Password</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="password" className="reset-page-label">New Password:</label>
        <input
          type="password"
          id="password"
          className="reset-page-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="confirmPassword" className="reset-page-label">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          className="reset-page-input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className="reset-page-button">Submit</button>
      </form>
      {message && <p className="reset-page-message">{message}</p>}
    </div>
  );
}

export default NewPassword;