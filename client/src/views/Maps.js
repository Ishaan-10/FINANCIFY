import React from "react";

// react-bootstrap components
import { Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col, } from "react-bootstrap";

function Maps() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
            <Card.Header>
                <Card.Title as="h4">Add your Goals</Card.Title>
                <p className="card-category">
                  This will help you to manage your finance goals.
                </p>
            </Card.Header>
            
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Maps;
