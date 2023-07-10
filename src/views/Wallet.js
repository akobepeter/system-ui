import React from "react";
import { Card, Col, Container, Row, Form } from "react-bootstrap";

const Wallet = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md="6" sm="12">
            <Card style={{ height: "100px" }} className="p-3">
              <Card.Title as="h4">Select Top-Up Method</Card.Title>
              <Row>
                <Col className="pr-1" md="6">
                  <Form.Select size="lg">
                    <option selected>Open this select menu</option>
                    <option>Pay with Card</option>
                    <option>Pay with Flutterwave</option>
                    <option>Pay with Paystack</option>
                    <option>Pay with Wema Virtual Account</option>
                    <option>Pay with Transfer</option>
                  </Form.Select>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Wallet;
