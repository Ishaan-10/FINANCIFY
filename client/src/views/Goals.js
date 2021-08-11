import React, { useState, useEffect } from "react";
import { getGoal, setGoal, updateGoal, deleteGoal } from "API";
import Goals from "../components/Goals";
var moment = require('moment');
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

  const [allGoals, setAllGoals] = useState([]);
  // 
  const [newGoal, setNewGoal] = useState("");
  const [newtargetAmount, setNewtargetAmount] = useState("");
  const [newcurrentAmount, setNewcurrentAmount] = useState("");
  const [newendDate, setNewendDate] = useState("");
  const [newcompleted, setNewcompleted] = useState("");

  const newGoalData = { goal: newGoal, targetAmount: newtargetAmount, currentAmount: newcurrentAmount, endDate: newendDate, completed: false };

  const fetchGoals = async () => {
    await getGoal().then((res) => {
      console.log(res.data);
      setAllGoals(res.data)
    }).catch(e => console.log(e.message))
  }
  const createNewGoal = async (e) => {
    await setGoal(newGoalData).then(res=>console.log(res)).catch(e=>console.log(res))
    fetchGoals()
  }
  const deleteOneGoal = async (goals_id)=>{
    console.log("trying to delete")
    await deleteGoal({goals_id}).then(()=>{
      fetchGoals()
    }).catch(e=>console.log(e.message))
  }

  useEffect(() => {
    fetchGoals()
  }, [])
  /* { goal: newGoal, targetAmount: newtargetAmount, currentAmount: newcurrentAmount, endDate: newendDate, completed: false } */

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
          {allGoals.map(goal=>{
            return (
              <Goals
              goal={goal.goal}
              targetAmount={goal.targetAmount}
              currentAmount={goal.currentAmount}
              endDate={goal.endDate}
              completed={goal.completed}
              startDate={goal.startDate}
              goals_id={goal._id}
              deleteGoal={deleteOneGoal}
              />
            )
          })
          }

          </Col>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Add New Goal</Card.Title>
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
                        placeholder="Goal aim"
                        type="text"
                        value={newGoal}
                        required
                        onChange={(e)=>setNewGoal(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="6">
                    <Form.Group>
                      <label>Deadline</label>
                      <Form.Control
                        placeholder="Date"
                        type="date"
                        onChange={(e)=>setNewendDate(e.target.valueAsDate)}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pl-4" md="6">
                    <Form.Group>
                      <label>Currently Saved</label>
                      <Form.Control
                        placeholder="Goal amount"
                        type="number"
                        value={newcurrentAmount}
                        onChange={(e)=>setNewcurrentAmount(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="6">
                    <Form.Group>
                      <label>Target Amount</label>
                      <Form.Control
                        placeholder="Goal amount"
                        type="number"
                        value={newtargetAmount}
                        onChange={(e)=>setNewtargetAmount(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <div className="d-grid gap-2 pl-2">
                  <Button className="btn-fill pull-right" variant="success" onClick={createNewGoal}>
                    Add Goal
                  </Button>
                </div>
                
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Maps;
