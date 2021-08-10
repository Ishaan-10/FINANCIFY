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

export default function Goals(props) {
  const percentage = parseInt((props.currentAmount) / (props.targetAmount) * 100);
  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title as="h3">{props.goal}</Card.Title>
        </Card.Header>

        <Card.Body>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "20px" }}>
            <div>
              <span style={{ color: "red" }}> Currently Saved: {props.currentAmount} </span>
            </div>
            <div>
              <span style={{ color: "green" }}> Goal Amount: {props.targetAmount}</span>
            </div>
          </div>
          <div className="progressBar my-1" style={{ fontSize: "15px" }}>
            <ProgressBar animated now={percentage} label={`${percentage}% completed`} />
          </div>
          <div className="mt-2">
          <Form className="form-inline float-right">
              <Form.Control
                placeholder="Add Amount"
                type="Number"
              ></Form.Control>
              <Form.Control
                type="Date"
              ></Form.Control>
              <Button className="btn btn-fill mx-1">Update</Button>
              <Button className="btn btn-fill mx-1 btn-danger">Delete</Button>
          </Form>

            <span>Deadline: {props.endDate} </span>
            <br />
            <span>Date set: {props.startDate} </span>


          </div>

        </Card.Body>
      </Card>
    </>
  )
}
