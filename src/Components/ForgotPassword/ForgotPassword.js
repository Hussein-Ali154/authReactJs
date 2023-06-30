import React, { useState } from 'react';
import axios from 'axios';

function ForgetPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/forgot-password', { email });
      setSuccess(true);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      {success ? (
        <p>A password reset email has been sent to your email address.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

export default ForgetPasswordPage;