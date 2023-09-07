import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../images/tbw.png";
import "../../App.css";

const Navigator = () => {
  return (
    <Navbar bg="light" expand="lg md" variant="light" className="nav-manual">
      <Container className="">
        <Navbar.Brand href="/" className="col-6">
          <img
            src={logo}
            alt=""
            width="50"
            height="44"
            className="align-text-center"
          />
          Trusted Bitcoin Wallet
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="navbar-nav">
            <Nav.Item>
              <Nav.Link
                href="/about"
                className="nav-link active"
                aria-current="page"
              >
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/working" className="nav-link">
                Working
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/faq" className="nav-link">
                FAQ
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contacts" className="nav-link">
                Contact Us
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/login" className="btn btn-secondary">
                Login/SignUp
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigator;
