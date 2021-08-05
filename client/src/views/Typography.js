import React from "react";
import TransactionRow from "components/TransactionRow";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Typography() {
  return (
    <>
      <Container fluid>
        <Row>
        <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">List of your Subscriptions</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Serial No.</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Amount</th>
                      <th className="border-0">Repeat Duration</th>
                      <th className="border-0">Mode of Payment</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TransactionRow/>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Add Subscripton</Card.Title>
                <p className="card-category">
                  Simply fill out the form below to keep a track of your subscriptions
                </p>
              </Card.Header>
              <Form>
              <Row>
                    <Col className="pl-4" md="12">
                      <Form.Group>
                        <label>Subscription For</label>
                        <Form.Control
                          defaultValue="PORNHUB"
                          placeholder="Name of the subscription"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-4" md="6">
                      <Form.Group>
                        <label>Amount</label>
                        <Form.Control
                          defaultValue="69696969"
                          placeholder="Amount"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Repeat Duration</label>
                        <Form.Control
                          defaultValue="Lifetime hai bruh"
                          placeholder="Duration"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="d-grid gap-2 pl-2">
                  <Button variant="primary" type="submit">
                    Add Subscription
                  </Button>
                  </div>
                  <br />
                </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Typography;
