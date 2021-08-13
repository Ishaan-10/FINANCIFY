import React, { useState, useEffect } from "react";
import SubscriptionRow from "components/SubscriptionRow";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
import { getPayment, createPayment, deletePayment, updatePayment } from 'API';

function Typography() {

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
  
  const [data, setData] = useState([]);
  const [newName, setNewName] = useState("")
  const [newAmount, setNewAmount] = useState("")
  const [newRepeatDuration, setNewRepeatDuration] = useState("");
  const [newDate, setNewDate] = useState("")

  const paymentData = {
    name: newName, amount: newAmount, repeatDuration: newRepeatDuration, date: newDate
  }

  const fetchData = async () => {
    await getPayment().then(res => {
      console.log(res.data)
      setData(res.data)
    }).catch(e => {
      console.log(e.message)
    })
  }
  const newSubscription = async (e)=> {
    e.preventDefault()
    await createPayment(paymentData).then(async res => {
      console.log(res.data)
      notifySuccess("Added new subscription")
      await fetchData()
    }).catch(e => notifyFailure())
  }

  const deleteSubscription = async(id)=>{
    await deletePayment({rpayment_id:id}).then(res=>{
      console.log(res.data);
      notifySuccess("Successfully Deleted")
      fetchData()
    }).catch(e=>notifyFailure())
  }


  useEffect(async () => {
    fetchData()
  }, [])
  return (
    <>
    <ToastContainer />
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
                      <th className="border-0">Date</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((subscription, index) => {
                      return (
                        <SubscriptionRow
                          sNo={index + 1}
                          name={subscription.name}
                          amount={subscription.amount}
                          repeatDuration={subscription.repeatDuration}
                          date={subscription.date}
                          deleteSubscription={deleteSubscription}
                          _id={subscription._id}
                        />
                      )
                    })}

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
                  <Col className="pl-4" md="6">
                    <Form.Group>
                      <label>Name of subscription</label>
                      <Form.Control
                        placeholder="Name of the subscription"
                        type="text"
                        value={newName}
                        onChange={e => setNewName(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="5">
                    <Form.Group style={{marginLeft:"1rem"}}>
                      <label>Date</label>
                      <Form.Control
                        placeholder="Date"
                        type="date"
                        onChange={e => setNewDate(e.target.valueAsDate)}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pl-4" md="6">
                    <Form.Group>
                      <label>Amount</label>
                      <Form.Control
                        placeholder="Amount"
                        type="number"
                        value={newAmount}
                        onChange={e => setNewAmount(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="5">
                    <Form.Group style={{marginLeft:"1rem"}}>
                      <label>Repeat Duration</label>
                      <Form.Control as="select"
                        onChange={(e) => setNewRepeatDuration(e.target.value)}
                        required
                      >
                        <option>Choose...</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Annully">Annually</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <div className="d-grid gap-2 pl-2">
                  <Button className="btn-fill pull-right" variant="success" type="button" onClick={newSubscription}>
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
