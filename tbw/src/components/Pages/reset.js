import React, { useState } from "react";
import { Container, Form, InputGroup, Button, Col, Row } from "react-bootstrap";

function Reset() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="mt-5">Trusted Bitcoin Wallet</h2>
        </Col>
        <Col>
          <h2 className="mt-5">Reset Password</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email:</Form.Label>
              <InputGroup>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Button type="submit" variant="primary">
                  SUBMIT
                </Button>
              </InputGroup>
            </Form.Group>
          </Form>
          <p className="mt-3">
            <a href="#">Forgot Password?</a>
          </p>
          <p>
            Don't have an account? <a href="#">Create a new account</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Reset;
