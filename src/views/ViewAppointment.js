import React from "react";
import { Container, Col, Row, Card, Form, Table } from "react-bootstrap";

const Appointment = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h4">View Appointment</Card.Title>

                <Row>
                  <Col className="pr-1" md="6">
                    <Form.Group>
                      <label>From</label>
                      <Form.Control type="date"></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="6">
                    <Form.Group>
                      <label>To</label>
                      <Form.Control type="date"></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <div className="table-responsive">
                  <Table className="table align-middle">
                    <thead className="bg-dark">
                      <tr className="text-center">
                        <th
                          scope="col"
                          className="text-uppercase text-white text-xxs font-weight-bolder opacity-10"
                        >
                          S/No
                        </th>
                        <th
                          scope="col"
                          className="text-uppercase text-white text-xxs font-weight-bolder opacity-10 ps-2"
                        >
                          Service
                        </th>
                        <th
                          scope="col"
                          className="text-uppercase text-white text-xxs font-weight-bolder opacity-10 ps-2"
                        >
                          Created By
                        </th>
                        <th
                          scope="col"
                          className="text-center text-uppercase text-white text-xxs font-weight-bolder opacity-10"
                        >
                          Amount
                        </th>
                        <th
                          scope="col"
                          className="text-center text-uppercase text-white text-xxs font-weight-bolder opacity-10"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>
                        <td>Widal Test</td>
                        <td>Shapiro Jackson</td>
                        <td>1000</td>
                        <td>
                          <i class="fa fa-eye"></i>
                        </td>
                      </tr>
                      <tr>
                        <th>1</th>
                        <td>Widal Test</td>
                        <td>Shapiro Jackson</td>
                        <td>1000</td>
                        <td>
                          <i class="fa fa-eye"></i>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Appointment;
