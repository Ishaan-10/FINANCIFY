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
  ProgressBar,
  Container,
  Row,
  Col, } from "react-bootstrap";

function Maps() {
  const percentage = 73
  return (
    <>
      <Container fluid>
        <Row>
        <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Goal Progress</Card.Title>
              </Card.Header>
              <Card.Body>
              <div className="progressBar">
                <ProgressBar now={percentage} label={`${percentage}% completed`} />
              </div>
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
                        defaultValue="Save For a Home"
                        placeholder="Goal"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                </Col>
                <Col className="pl-1" md="6">
                  <Form.Group>
                    <label>Goal Amount</label>
                    <Form.Control
                        defaultValue="1000000"
                        placeholder="Amount"
                        type="number"
                    ></Form.Control>
                    </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="pl-4" md="6">
                  <Form.Group>
                    <label>Date Started</label>
                      <Form.Control
                        placeholder="Start Time"
                        type="date"
                      ></Form.Control>
                    </Form.Group>
                </Col>
                <Col className="pl-1" md="6">
                  <Form.Group>
                    <label>Deadline</label>
                    <Form.Control
                        placeholder="Date"
                        type="date"
                    ></Form.Control>
                    </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="pl-4" md="12">
                  <Form.Group>
                    <label>How will you complete it?</label>
                      <Form.Control
                        defaultValue="Saving in Fixed Deposists"
                        placeholder="Completion"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                </Col>
              </Row>
              <div className="d-grid gap-2 pl-2">
                  <Button className="btn-fill pull-right" variant="primary" type="submit">
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
