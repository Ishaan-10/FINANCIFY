import React from "react";

import News from "../components/News";

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
              <Card.Header as="h3">News Feed for Upcoming Sales</Card.Header>
              <hr></hr>
            </Card>
            <News/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Icons;
