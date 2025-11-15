import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LinkContainer } from 'react-router-bootstrap';
import logoSymbol from './assets/smlc.png';  // Adjust path & extension accordingly

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" sticky="top" variant="dark" style={{ backgroundColor: '#0d1b44ff' }} className="shadow-sm">
      <Container fluid className="d-flex align-items-center" style={{ paddingLeft: '8px' }}>
        <Navbar.Brand href="#home" className="d-flex align-items-center" style={{ marginLeft: 0 }}>
          {/* Replace circle and text with your logo symbol image */}
          <img
            src={logoSymbol}
            alt="SMCL Logo Symbol"
            style={{
              height: '60px',
              width: '70px',
              objectFit: 'contain',
              userSelect: 'none',
            }}
          />

          {/* Company name next to logo symbol */}
          <span style={{ color: '#fff', fontWeight: 600, fontSize: '20px', marginLeft: '12px' }}>
            SMCL Finance
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/About">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
