import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Icons() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Customized Feed for Upcoming Sales</Card.Title>
              </Card.Header>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Icons;
