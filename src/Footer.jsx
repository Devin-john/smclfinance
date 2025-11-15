import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Facebook, Twitter, Instagram, Linkedin } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line jsx-a11y/anchor-is-valid

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
              <Link
                aria-label="Facebook"
                className="text-light fs-4"
                style={{ color: "#fff" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </Link>
              <Link
                aria-label="Twitter"
                className="text-light fs-4"
                style={{ color: "#fff" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </Link>
              <Link
                aria-label="Instagram"
                className="text-light fs-4"
                style={{ color: "#fff" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </Link>
              <Link
                aria-label="LinkedIn"
                className="text-light fs-4"
                style={{ color: "#fff" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </Link>
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
              <Link
                to="/"
                className="px-0"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="px-0"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                About Us
              </Link>
              <Link
                to="#contact"
                className="px-0"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Contact Us
              </Link>
              <Link
                to="#loan"
                className="px-0"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Need A Loan?
              </Link>
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
              <Link
                to="#homeloan"
                className="px-0"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Home Loan
              </Link>
              <Link
                to="#loanagainstproperty"
                className="px-0"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Loan Against Property
              </Link>
              <Link
                to="#businessloan"
                className="px-0"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Business Loan
              </Link>
              <Link
                to="#personalloan"
                className="px-0"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Bill Discounting

              </Link>
              <Link
                to="#personalloan"
                className="px-0"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
              </Link>
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
              <Link
                to="#privacy"
                className="px-0"
                style={{ color: "rgba(255,255,255,0.75)" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </Link>
              <Link
                to="#terms"
                className="px-0"
                style={{ color: "rgba(255,255,255,0.75)" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </Link>
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
