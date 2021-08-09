import React from 'react'

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

export default function News() {
    return (
        <>
        <Card className="text-center">
              <Card.Header>Sale on Amazon</Card.Header>
              <hr></hr>
              <Card.Body>
                <Card.Title>50% savings on electronics</Card.Title>
                <Card.Text>
                  Since you are buying a lot of electronics, we suggest to keep an eye on sales/discounts.
                </Card.Text>
                <Button variant="primary">Save Money</Button>
              </Card.Body>
              <hr></hr>
              <Card.Footer className="text-muted">Till 2 days</Card.Footer>
        </Card>
        </>
    )
}
