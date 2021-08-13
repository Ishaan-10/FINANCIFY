import React, { useState, useEffect } from "react";
import { getGoal, setGoal, updateGoal, deleteGoal,addAmount,completeGoal} from "API";
import Goals from "../components/Goals";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const notifySuccess = (message) => toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  const notifyFailure = ()=>toast.error("An Error Occured", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

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
    await setGoal(newGoalData).then(()=>notifySuccess("Successfully Added New Goal")).catch(e=>notifyFailure())
    fetchGoals()
  }
  const deleteOneGoal = async (goals_id)=>{
    console.log("trying to delete")
    await deleteGoal({goals_id}).then(()=>{
      notifySuccess("Successfully Deleted")
      fetchGoals()
    }).catch(e=>notifyFailure())
  }
  const updateCurrentAmount = async(id,amount)=>{
    await addAmount({ goals_id:id,amountToBeAdded:amount }).then(res=>{
      console.log(res.data)
      notifySuccess("Successfully Updated")
      fetchGoals()
    }).catch(e=>notifyFailure())
  }
  const markCompleted=async(id)=>{
    await completeGoal({goals_id:id}).then(res=>{
      console.log(res.data)
      fetchGoals()
      notifySuccess("Marked Completed")
    }).catch(e=>notifyFailure())
  }

  useEffect(() => {
    fetchGoals()
  }, [])
  /* { goal: newGoal, targetAmount: newtargetAmount, currentAmount: newcurrentAmount, endDate: newendDate, completed: false } */

  return (
    <>
      <ToastContainer />
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
              updateAmount={updateCurrentAmount}
              deleteGoal={deleteOneGoal}
              markCompleted={markCompleted}
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
                  <Col className="pl-1" md="5">
                    <Form.Group style={{marginLeft:"1rem"}}>
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
                  <Col className="pl-1" md="5">
                    <Form.Group style={{marginLeft:"1rem"}}>
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
                <br></br>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Maps;
