import React from "react";
import TransactionRow from "components/TransactionRow";

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

function TableList() {
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
                      <th className="border-0">Action</th>
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
            <h3>NEW TRANSACTION FORM</h3>
            <Form>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Row>
                      <Col>
                        <Form.Control placeholder="Name of the Transaction"></Form.Control>
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridNum">
                      <Form.Label>Amount</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter the Amount"
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridCat">
                      <Form.Label>Category</Form.Label>
                      <Form.Control as="select">
                        <option>Choose...</option>
                        <option>Condom</option>
                        <option>Porn</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCityPay">
                      <Form.Label>Mode of Payment</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Form.Row>
                  <Button variant="primary" type="submit">
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
