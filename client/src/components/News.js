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
              <Card.Header>Featured</Card.Header>
              <hr></hr>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              <hr></hr>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
        </>
    )
}
