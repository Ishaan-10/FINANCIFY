import React, { useState, useEffect } from "react";
import TransactionRow from "components/TransactionRow";
import { getTransaction, createTransaction, updateTransaction, deleteTransaction } from "API";

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
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";

function TableList() {

  const [data, setData] = useState([]);
  const [newName, setNewName] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newPaymentMode, setNewPaymentMode] = useState("");

  const transactionData = {
    name: newName, category: newCategory, amount: newAmount, date: newDate, paymentMode: newPaymentMode
  }

  const fetchData = async () => {
    await getTransaction().then(res => {
      console.log(res.data)
      setData(res.data)
    }).catch(e => {
      console.log(e.message)
    })
  }

  useEffect(async () => {
    fetchData()
  }, [])

  const newTransaction = (e) => {
    e.preventDefault()
    createTransaction(transactionData).then(async res => {
      await fetchData()
    }).catch(e => console.log(e.message))
  }

  const updateTrans = (data) => {
    createTransaction(data).then(res => {
      console.log(data);
    }).catch(e => console.log(e.message))
  }

  const deleteTrans = async (id) => {
    const data = { transaction_id: id }
    deleteTransaction(data).then(async res => {
      await fetchData()
      console.log(data);
    }).catch(e => console.log(e.message))
  }


  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Striped Table with Hover</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Serial No.</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Amount</th>
                      <th className="border-0">Category</th>
                      <th className="border-0">Mode of Payment</th>
                      <th className="border-0">Date</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((transaction, index) => {
                      return (
                        <TransactionRow
                          key={index}
                          sNo={index}
                          name={transaction.name}
                          amount={transaction.amount}
                          category={transaction.category}
                          date={transaction.date}
                          paymentMode={transaction.paymentMode}
                          deleteTransaction={deleteTrans}
                          _id={transaction._id}
                        />
                      )
                    })

                    }

                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>


          <Col md="12">
            <h3>Add New Transaction</h3>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Row>
                  <Col>
                    <Form.Control placeholder="Name of the Transaction"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      required
                    ></Form.Control>
                  </Col>
                </Form.Row>
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridNum">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter the Amount"
                    value={newAmount}
                    onChange={(e) => setNewAmount(e.target.value)}
                    required
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridCat">
                  <Form.Label>Category</Form.Label>
                  <Form.Control as="select"
                    onChange={(e) => setNewCategory(e.target.value)}
                    required
                  >
                    <option value="">Choose...</option>
                    <option value="Household">Household</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Others">Others</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Mode of Payment</Form.Label>
                  <Form.Control as="select"
                    onChange={(e) => setNewPaymentMode(e.target.value)}
                    required
                  >
                    <option value="">Choose...</option>
                    <option value="credit card">Credit Card</option>
                    <option value="debit card">Debit Card</option>
                    <option value="cash">Cash</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="UPI">UPI</option>
                    <option value="net banking">Net Banking</option>
                    <option value="others">Others</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <label>Date</label>
                  <Form.Control
                    placeholder="Date"
                    type="date"
                    onChange={e => setNewDate(e.target.valueAsDate)}
                  ></Form.Control>
                </Form.Group>
              </Form.Row>
              <Button  className="btn-fill pull-right" variant="primary" type="submit" onClick={newTransaction}>
                Submit
              </Button>
              <br />
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
