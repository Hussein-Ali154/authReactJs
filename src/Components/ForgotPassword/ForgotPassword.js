import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://example.com/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.error) {
        setErrorMessage(data.error);
      } else {
        history.push(`/reset-password/${data.resetCode}`);
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-3">Forgot Password</h2>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Send Reset Code
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ForgotPassword;