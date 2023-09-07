import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Registration() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    referralCode: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === confirmPassword) {
      console.log("Form submitted with data:", formData);
    } else {
      console.log("Password and Confirm Password do not match.");
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="mt-5">Trusted Bitcoin Wallet</h2>
        </Col>

        <Col>
          <h2 className="mt-5">Create Account</h2>
          <Form onSubmit={handleSubmit}>
            <Col>
              <Form.Group controlId="firstname">
                <Form.Label>First Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  required
                  className="small-input"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="lastname">
                <Form.Label>Last Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  required
                  className="small-input"
                />
              </Form.Group>
            </Col>

            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="small-input"
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="small-input"
              />
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password:</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="small-input"
              />
            </Form.Group>
            <Form.Group controlId="referralCode">
              <Form.Label>Referral Code (If Any):</Form.Label>
              <Form.Control
                type="text"
                name="referralCode"
                value={formData.referralCode}
                onChange={handleInputChange}
                className="small-input"
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Sign Up
            </Button>
          </Form>
          <p className="mt-3">
            Already have an account? <a href="#">Log in</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Registration;
