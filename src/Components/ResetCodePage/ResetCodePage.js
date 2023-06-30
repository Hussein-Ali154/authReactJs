import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function ResetCodePage() {
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('/api/reset-password', { code, password });
      localStorage.setItem('token', response.data.token);
      setSuccess(true);
      setTimeout(() => {
        history.push('/dashboard');
      }, 3000);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      {success ? (
        <p>Your password has been reset. You will be redirected to the dashboard shortly.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="code">Reset Code:</label>
            <input
              type="text"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">New Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p>{error}</p>}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default ResetCodePage;