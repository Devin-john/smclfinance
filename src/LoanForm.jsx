import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Form, Button, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import EMICalculator from './EMICalculator';
import hdfcLogo from "./assets/hdfc.png";
import sbiLogo from "./assets/sbi.png";
import indLogo from "./assets/ind.png";
import iciciLogo from "./assets/icici.png";
import axisLogo from "./assets/axis.png";
import kotakLogo from "./assets/kotak.png";
import abflLogo from "./assets/abfl.png";
import iiflLogo from "./assets/iifl.png";
import bajajLogo from "./assets/bajaj.png";
import tataLogo from "./assets/tata.png";
import fronImage from './assets/fron.jpg';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    employmentType: "",
    loanType: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:7777/api/loan/apply", formData);
      alert("Submission Successful!");
    } catch (error) {
      console.error(error);
      alert("Submission Failed. Please check if the backend is running.");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="text-white"
        style={{
          backgroundImage: `url(${fronImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#0b2e6b',
          backgroundBlendMode: 'multiply',
          padding: '3rem 0',
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4 fw-bold mb-3">
                Fast & Secure <br /> HOME & BUSINESS Loans
              </h1>
              <p className="lead mb-4">Lowest interest - Quick approval - 100% paperless process</p>
              <div className="d-flex align-items-center mb-4 gap-4" style={{ fontSize: '1rem' }}>
                <div className="d-flex align-items-center">
                  <span className="me-2">🛡️</span> RBI Compliant
                </div>
                <div className="d-flex align-items-center">
                  <span className="me-2">🔒</span> Data Security
                </div>
              </div>
              <Button
                onClick={() => {
                  document.getElementById("loan-application-form").scrollIntoView({ behavior: "smooth" });
                }}
                style={{ backgroundColor: '#f5b742', border: 'none', color: '#0b2e6b', fontWeight: '600' }}
                size="lg"
              >
                Apply Now
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <EMICalculator />

      {/* Loan Types Section */}
      <section className="py-4 bg-blue">
  <Container>
    <h2 className="text-center mb-5 fw-bold" style={{ color: '#0b2e6b' }}>Loan Types</h2>
    <Row className="gx-4 justify-content-center">
  {/* Combined Home Loan & Loan Against Property */}
  <Col md={3} sm={6} className="mb-4">
    <Card className="h-100 bg-white shadow rounded text-center py-4">
      <div className="d-flex justify-content-center gap-2 mb-3">
        <span style={{ fontSize: '3rem', color: '#f5b742' }}>🏡</span>
      </div>
      <Card.Title className="fw-bold mt-3" style={{ color: '#0b2e6b' }}>
        Home Loan & Loan Against Property
      </Card.Title>
      <Card.Text className="text-muted">
        Document verification and property-secured loans
      </Card.Text>
    </Card>
  </Col>

  {/* Business Loan */}
  <Col md={3} sm={6} className="mb-4">
    <Card className="h-100 bg-white shadow rounded text-center py-4">
      <div style={{ fontSize: '3rem', color: '#f5b742' }}>💼</div>
      <Card.Title className="fw-bold mt-3" style={{ color: '#0b2e6b' }}>Business Loan</Card.Title>
      <Card.Text className="text-muted">Fast approval with minimal documentation</Card.Text>
    </Card>
  </Col>

  {/* Private Finance */}
  <Col md={3} sm={6} className="mb-4">
    <Card className="h-100 bg-white shadow rounded text-center py-4">
      <div style={{ fontSize: '3rem', color: '#f5b742' }}>🤝</div>
      <Card.Title className="fw-bold mt-3" style={{ color: '#0b2e6b' }}>Private Finance</Card.Title>
      <Card.Text className="text-muted">Customized loans for urgent needs</Card.Text>
    </Card>
  </Col>

  {/* Bill Discounting */}
  <Col md={3} sm={6} className="mb-4">
    <Card className="h-100 bg-white shadow rounded text-center py-4">
      <div style={{ fontSize: '3rem', color: '#f5b742' }}>📄</div>
      <Card.Title className="fw-bold mt-3" style={{ color: '#0b2e6b' }}>Bill Discounting</Card.Title>
      <Card.Text className="text-muted">Quick financing by discounting bills</Card.Text>
    </Card>
  </Col>
</Row>

        </Container>
      </section>
      {/* How it Works Section */}
<section className="py-5 bg-light">
  <Container>
    <h2 className="text-center mb-5 fw-bold" style={{ color: '#0b2e6b' }}>How it works</h2>
    <Row className="gx-4 text-center">
      {[
        { icon: "📝", title: "Apply online", desc: "1 Apply online" },
        { icon: "📄", title: "Document verification", desc: "2 Document" },
        { icon: "✅", title: "Get approval", desc: "3 Get approval" },
        { icon: "🏦", title: "Loan disbursed", desc: "4 Loan disbursed" },
      ].map(({ icon, title, desc }, idx) => (
        <Col md={3} key={idx} className="mb-4">
          <Card className="shadow-sm border-0 py-4 h-100">
            <Card.Body>
              <div style={{ fontSize: '3rem', color: '#0b2e6b' }}>{icon}</div>
              <Card.Title className="mt-3 fw-bold" style={{ color: '#0b2e6b' }}>{title}</Card.Title>
              <Card.Text className="text-muted">{desc}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</section>

      {/* Testimonials and Partnered Banks */}
      <section className="py-5 bg-red">
  <Container>
    <Row>
      <Col md={6}>
        <h3 className="mb-4 fw-bold" style={{ color: '#142f61ff' }}>What Our Customers Say</h3>
        {/* Review 1 */}
        <Card className="shadow-sm border-0 mb-4 p-3">
          <Row className="g-3 align-items-center">
            <Col xs={3}>
              <Image
                src="https://randomuser.me/api/portraits/men/45.jpg"  // Indian woman image
                roundedCircle
                fluid
              />
            </Col>
            <Col xs={9}>
              <Card.Text className="mb-1" style={{ color: '#333' }}>
                "SMCL Finance helped me get the loan I needed quickly. Their process was fast and their service was excellent."
              </Card.Text>
              <div style={{ color: '#f5b742' }}>★★★★★</div>
            </Col>
          </Row>
        </Card>
{/* Review 2 */}
        <Card className="shadow-sm border-0 mb-4 p-3">
          <Row className="g-3 align-items-center">
            <Col xs={3}>
              <Image
                src="https://randomuser.me/api/portraits/men/77.jpg"  // Indian man image
                roundedCircle
                fluid
              />
            </Col>
            <Col xs={9}>
              <Card.Text className="mb-1" style={{ color: '#333' }}>
                "The customer support team at SMCL Finance was excellent! The loan process was smooth and transparent."
              </Card.Text>
              <div style={{ color: '#f5b742' }}>★★★★★</div>
            </Col>
          </Row>
        </Card>

              {/* Add more testimonials similarly if needed */}
            </Col>

            <Col md={6}>
              <h3 className="mb-4 fw-bold" style={{ color: '#0b2e6b' }}>Partnered Banks</h3>
              <div className="d-flex flex-wrap gap-3 align-items-center justify-content-center justify-content-md-start">
                {[hdfcLogo, iciciLogo,  axisLogo,  kotakLogo,  sbiLogo, indLogo, abflLogo, iiflLogo, bajajLogo, tataLogo].map(
                  (logo, idx) => (
                    <Image
                      key={idx}
                      src={logo}
                      alt={`Bank Logo ${idx}`}
                      style={{ height: '60px', width:'50', objectFit: 'contain' }}
                    />
                  )
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Loan Application Form */}
      <section id="loan-application-form" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4 fw-bold" style={{ color: '#0b2e6b' }}>
            Apply For Loan
          </h2>
          <p className="text-center mb-5 text-muted">
            We are committed to helping you meet all your needs.
          </p>
          <Row className="justify-content-center">
            <Col md={8}>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="firstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="lastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="phone">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Row className="mb-4">
                  <Col md={6}>
                    <Form.Group controlId="employmentType">
                      <Form.Label>Employment Type</Form.Label>
                      <Form.Select
                        value={formData.employmentType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">-- Select --</option>
                        <option value="salaried">Salaried</option>
                        <option value="self-employed">Self-Employed</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="loanType">
                      <Form.Label>Loan Type</Form.Label>
                      <Form.Select
                        value={formData.loanType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">-- Select --</option>
                        <option value="private finance">Private Finance</option>
                        <option value="home">Home Loan</option>
                        <option value="business">Business Loan</option>
                        <option value="loan against property">Loan Against Property</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    style={{ backgroundColor: '#0b2e6b', border: 'none' }}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default App;
