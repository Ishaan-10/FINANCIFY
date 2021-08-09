import React from 'react'

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

export default function Goals() {
    const percentage = 73;
    return (
        <>
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
              </Card.Body>
            </Card>
        </>
    )
}
