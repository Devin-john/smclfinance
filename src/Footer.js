import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Facebook, Twitter, Instagram, Linkedin } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "rgba(12, 34, 56, 0.95)", // Dark, semi-transparent blue
        color: "rgba(255, 255, 255, 0.85)", // Soft white text
        paddingTop: "60px",
        paddingBottom: "40px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: "14px",
        lineHeight: "1.7",
      }}
    >
      <Container>
        <Row className="mb-4">
          {/* Logo and short description */}
          <Col md={3}>
            <h4
              className="fw-bold mb-3"
              style={{ fontWeight: "900", fontSize: "1.6rem", color: "#fff" }}
            >
              SMCL FINANCE
            </h4>
            <p style={{ color: "rgba(255,255,255,0.7)" }}>
              Your trusted partner in quick and secure loans with unmatched service quality.
            </p>
            {/* Social Media Icons */}
            <div className="d-flex gap-3 mt-4">
              <a
                aria-label="Facebook"
                className="text-light fs-4"
                style={{ color: "#fff" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
              <a
                aria-label="Twitter"
                className="text-light fs-4"
                style={{ color: "#fff" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
              <a
                aria-label="Instagram"
                className="text-light fs-4"
                style={{ color: "#fff" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
              <a
                aria-label="LinkedIn"
                className="text-light fs-4"
                style={{ color: "#fff" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={3}>
            <h5
              className="fw-bold mb-3"
              style={{ color: "rgba(255, 255, 255, 0.9)" }}
            >
              Quick Links
            </h5>
            <Nav className="flex-column">
              <Nav.Link
                href="#home"
                className="px-0"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                className="px-0"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className="px-0"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Contact Us
              </Nav.Link>
              <Nav.Link
                href="#loan"
                className="px-0"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Need A Loan?
              </Nav.Link>
            </Nav>
          </Col>

          {/* Loan Types */}
          <Col md={3}>
            <h5
              className="fw-bold mb-3"
              style={{ color: "rgba(255, 255, 255, 0.9)" }}
            >
              Loan Types
            </h5>
            <Nav className="flex-column">
              <Nav.Link
                href="#homeloan"
                className="px-0"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Home Loan
              </Nav.Link>
              <Nav.Link
                href="#loanagainstproperty"
                className="px-0"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Loan Against Property
              </Nav.Link>
              <Nav.Link
                href="#businessloan"
                className="px-0"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Business Loan
              </Nav.Link>
              <Nav.Link
                href="#personalloan"
                className="px-0"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Bill Discounting

              </Nav.Link>
              <Nav.Link
                href="#personalloan"
                className="px-0"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
              </Nav.Link>
            </Nav>
          </Col>

          {/* Company Info */}
          <Col md={3}>
            <h5
              className="fw-bold mb-3"
              style={{ color: "rgba(255, 255, 255, 0.9)" }}
            >
              Company
            </h5>
            <Nav className="flex-column">
              <Nav.Link
                href="#privacy"
                className="px-0"
                style={{ color: "rgba(255,255,255,0.75)" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </Nav.Link>
              <Nav.Link
                href="#terms"
                className="px-0"
                style={{ color: "rgba(255,255,255,0.75)" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </Nav.Link>
            </Nav>
          </Col>
        </Row>

        <hr style={{ borderColor: "rgba(255,255,255,0.15)" }} />

        <Row>
          <Col className="text-center" style={{ color: "rgba(255,255,255,0.5)" }}>
            &copy; {} since 2021 SMCL Finance. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
