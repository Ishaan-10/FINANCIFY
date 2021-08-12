import React, { useState } from 'react'

import {
  Badge,
  Button,
  Card,
  Form,
  ProgressBar,
} from "react-bootstrap";
var moment = require('moment');

export default function Goals(props) {
  const percentage = parseInt((props.currentAmount) / (props.targetAmount) * 100);
  const id = props.goals_id;
  const endDate = moment(props.endDate);
  const startDate = moment(props.startDate);
  const daysLeft = (endDate.diff(moment(), 'days') + 1)
  const [amountToAdd, setAmountToAdd] = useState(0);
  const barColor = props.completed ? "success" : "primary";


  return (
    <>
      <Card >
        <Card.Header>
          <Card.Title as="h3" >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>{props.goal}
               {!props.completed && <Button className="mx-2 btn btn-sm btn-fill">{daysLeft} Days Left</Button>}
              </div>
              <div>
                <Button className="btn btn-fill mx-1 btn-primary btn-sm"
                  onClick={() => props.markCompleted(id)}
                >Mark as completed</Button></div>
            </div>
          </Card.Title>
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
            <ProgressBar animated variant={barColor} now={percentage} label={`${percentage}% completed`} />
          </div>
          <div className="mt-2">
            <Form className="form-inline float-right">
              <Form.Control
                placeholder="Add Amount"
                type="Number"
                min="0"
                value={amountToAdd}
                onChange={(e) => setAmountToAdd(e.target.valueAsNumber)}
              ></Form.Control>
              <Button className="btn btn-fill mx-1"
                onClick={() => {
                  props.updateAmount(id, amountToAdd)
                }}
              >Add Money</Button>
              <Button className="btn btn-fill mx-1 btn-danger" onClick={() => props.deleteGoal(id)}>Delete Goal</Button>
            </Form>
            <span>Deadline: {moment(props.endDate).format("DD/MM/YYYY")} </span>
            <br />
            <span>Date set: {moment(props.startDate).format("DD/MM/YYYY")} </span>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}
