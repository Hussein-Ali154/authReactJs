import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import "./ResetPasswordPage.css";

function ResetPassword() {
  const { resetCode } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetCodeInput, setResetCodeInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleResetCodeChange = (event) => {
    setResetCodeInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    if (resetCodeInput !== resetCode) {
      setErrorMessage('Invalid reset code.');
      return;
    }

    try {
      const response = await fetch('https://example.com/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resetCode, newPassword }),
      });

      const data = await response.json();

      if (data.error) {
        setErrorMessage(data.error);
      } else {
        history.push('/password-reset-successful');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-3">Reset Password</h2>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formResetCode">
              <Form.Label>Reset Code</Form.Label>
              <Form.Control type="text" placeholder="Enter reset code" value={resetCodeInput} onChange={handleResetCodeChange} />
            </Form.Group>
            <Form.Group controlId="formNewPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="Enter new password" value={newPassword} onChange={handleNewPasswordChange} />
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm new password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Reset Password
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ResetPassword;