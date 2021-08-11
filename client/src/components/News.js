import React from 'react'

import img1 from '../images/gadgets.jpeg'

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
                <Button className="btn-fill pull-right" variant="secondary">Save Money</Button>
              </Card.Body>
              <hr></hr>
              <Card.Footer className="text-muted">Till 2 days</Card.Footer>
        </Card>
        <div class="card">
          <div class="card-horizontal">
            <div class="img-square-wrapper">
              <img class="" src={img1} alt="Card image cap"></img>
            </div>
            <div class="card-body">
              <h4 class="card-title">Card title</h4>
              <hr></hr>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Button className="btn-fill pull-right" variant="secondary">Save Money</Button>
            </div>

        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
        </>
    )
}
