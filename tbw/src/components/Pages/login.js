import React, { useState } from "react";
import { Container, Form, InputGroup, Button, Row, Col } from "react-bootstrap";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
          <h2 className="mt-5">Login</h2>
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
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password:</Form.Label>
              <InputGroup>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </InputGroup>
            </Form.Group>
            <Button type="submit" variant="primary">
              Login
            </Button>
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

export default Login;
