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
                  <Form.Group>
                    <Form.Label>Subscription For</Form.Label>
                    <Form.Row>
                      <Col>
                        <Form.Control placeholder="Name of the Subscription"></Form.Control>
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridNum">
                      <Form.Label>Amount</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter the Amount"
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridCityPay">
                      <Form.Label>Repeat Duration</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Form.Row>
                  <Button variant="primary" type="submit">
                    Add Subscription
                  </Button>
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
