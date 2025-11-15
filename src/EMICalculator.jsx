import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const EMICalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [results, setResults] = useState(null);

  const formatCurrency = (num) => {
    return num.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    });
  };

  const calculateEMI = (e) => {
    e.preventDefault();
    if (!principal || !rate || !time) {
      alert("Please fill all fields");
      return;
    }

    const P = parseFloat(principal);
    const r = parseFloat(rate) / 12 / 100;
    const n = parseFloat(time) * 12;

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalAmount = emi * n;
    const totalInterest = totalAmount - P;

    setResults({
      emi: emi.toFixed(0),
      principal: P,
      totalInterest: totalInterest.toFixed(0),
      totalAmount: totalAmount.toFixed(0),
    });
  };

  return (
    <Container className="my-5">
      <Card className="p-4 mx-auto" style={{ maxWidth: '720px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h3 className="text-center mb-4" style={{ color: '#0b2e6b', fontWeight: '700' }}>EMI Calculator</h3>
        <Row>
          {/* Input form column */}
          <Col md={6}>
            <Form onSubmit={calculateEMI}>
              <Form.Group className="mb-3" controlId="principal">
                <Form.Label>Loan Amount (₹):</Form.Label>
                <Form.Control
                  type="number"
                  min="0"
                  placeholder="Enter loan amount"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                  required
                  style={{ fontWeight: '600', border: 'none', borderBottom: '2px solid #0b2e6b', borderRadius: 0, background: 'transparent' }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="rate">
                <Form.Label>Annual Interest Rate (%):</Form.Label>
                <Form.Control
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="Enter interest rate"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  required
                  style={{ fontWeight: '600', border: 'none', borderBottom: '2px solid #0b2e6b', borderRadius: 0, background: 'transparent' }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="time">
                <Form.Label>Loan Tenure (Years):</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  step="1"
                  placeholder=" tenure "
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  style={{ fontWeight: '600', border: 'none', borderBottom: '2px solid #0b2e6b', borderRadius: 0, background: 'transparent', width: '90px' }}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100" style={{ fontWeight: 'bold',backgroundColor: '#0b2e6b', borderRadius: '8px' }}>
                Calculate EMI
              </Button>
            </Form>
          </Col>

          {/* Results column */}
          <Col md={6} className="mt-4 mt-md-0">
            {results && (
              <Card style={{ backgroundColor: '#f0f6ff', borderRadius: '12px', boxShadow: 'inset 0 0 10px #d9e6ff' }} className="p-4">
                <Table borderless size="sm" className="mb-0" style={{ color: '#535353' }}>
                  <tbody>
                    <tr>
                      <td>Monthly EMI</td>
                      <td className="text-end" style={{ fontWeight: '600', color: '#0b2e6b' }}>{formatCurrency(Number(results.emi))}</td>
                    </tr>
                    <tr>
                      <td>Principal amount</td>
                      <td className="text-end" style={{ fontWeight: '600', color: '#0b2e6b' }}>{formatCurrency(results.principal)}</td>
                    </tr>
                    <tr>
                      <td>Total interest</td>
                      <td className="text-end" style={{ fontWeight: '600', color: '#0b2e6b' }}>{formatCurrency(Number(results.totalInterest))}</td>
                    </tr>
                    <tr>
                      <td>Total amount</td>
                      <td className="text-end" style={{ fontWeight: '600', color: '#0b2e6b' }}>{formatCurrency(Number(results.totalAmount))}</td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            )}
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default EMICalculator;
