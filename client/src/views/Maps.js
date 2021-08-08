import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  ProgressBar,
  Container,
  Row,
  Col,
} from "react-bootstrap";

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
                <div style={{ display: "flex", justifyContent: "space-between", fontSize:"20px" }}>
                  <div>
                    Currently Saved: 45000
                  </div>
                  <div>
                    Goal Amount: 100000
                  </div>
                </div>
                <div className="progressBar" style={{ fontSize:"15px" }}>
                  <ProgressBar now={percentage} label={`${percentage}% completed`} />
                </div>
                {/* <div className="my-2 col-5">
                  <Form.Control
                    placeholder="Add Amount"
                    type="Number"
                  ></Form.Control>
                  <Button>Add Amount</Button>
                </div> */}
                <Form>
                <Row>
                  <Col className="pl-4" md="3">
                    <Form.Group>
                      {/* <label>Date Started</label> */}
                      <Form.Control
                        placeholder="Start Time"
                        type="date"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="3">
                    <Form.Group>
                      {/* <label>Deadline</label> */}
                      <Form.Control
                        placeholder="Date"
                        type="date"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="3">
                  <Form.Control
                      placeholder="Add Amount"
                      type="Number"
                    ></Form.Control>
                  </Col>
                  <Col className="pl-1" md="3">
                  <Button className="ml-2 btn btn-fill">Add</Button>
                  </Col>
                </Row>
                </Form>
                  {/* <Form className="form-inline my-3 float-right">
                    <Form.Control
                      placeholder="Add Amount"
                      type="Number"
                    ></Form.Control>
                    <Button className="ml-2 btn btn-fill">Add</Button>
                  </Form> */}
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
