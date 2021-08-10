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
              <Card.Header>
                <Card.Title as="h3">
                Customized Feed for Upcoming Sales
                </Card.Title>
              </Card.Header>
            </Card>
            <News/>
            <News/>
            <News/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Icons;
