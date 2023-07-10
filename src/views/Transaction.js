import React from "react";
import {
  Container,
  Row,
  Card,
  Col,
  Table,
  Form,
  Dropdown,
} from "react-bootstrap";

const Transaction = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i class="bi bi-cash text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p class="card-category">Wallet Balance</p>
                      <Card.Title as="h4">N100,000</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr />
                <div className="stats">+55% click to top-up</div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i class="bi bi-watch text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Transaction Count</p>
                      <Card.Title as="h4">100</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr />
                <div className="stats">+5% than yesterday</div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h4">Pending Transactions</Card.Title>

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

export default Transaction;
