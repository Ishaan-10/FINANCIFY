import React from "react";
import TransactionRow from "components/TransactionRow";

// react-bootstrap components
import { Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col, } from "react-bootstrap";

function Maps() {
  return (
    <>
      <Container fluid>
        <Row>
        <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">List of all the goals</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Serial No.</th>
                      <th className="border-0">Goal</th>
                      <th className="border-0">Amount</th>
                      <th className="border-0">Deadline</th>
                      <th className="border-0">Mode of Payment</th>
                      <th className="border-0">COmpleted</th>
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
                <Card.Title as="h4">Add your Goals</Card.Title>
                <p className="card-category">
                  This will help you to manage your finance goals.
                </p>
            </Card.Header>
            <Form>
            <Row>
                <Col className="pl-4" md="6">
                  <Form.Group>
                    <label>Goal Description</label>
                      <Form.Control
                        defaultValue="kuch bhi"
                        placeholder="goal"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                </Col>
                <Col className="pl-1" md="6">
                  <Form.Group>
                    <label>Goal Amount</label>
                    <Form.Control
                        defaultValue="696969"
                        placeholder="Amount"
                        type="number"
                    ></Form.Control>
                    </Form.Group>
                </Col>
              </Row>
              <div className="d-grid gap-2 pl-2">
                  <Button variant="primary" type="submit">
                    Add Goal
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

export default Maps;
