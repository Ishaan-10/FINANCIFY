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
        <div class="card">
          <div class="card-horizontal">
            <div class="img-square-wrapper">
              <img class="" src={img1} alt="Card image cap"></img>
            </div>
            <div class="card-body">
              <h3 class="card-header">Sale on Amazon</h3>
              <hr></hr>
              <h4 class="card-title">50% savings on electronics</h4>
              <hr></hr>
              <p class="card-text">Since you are buying a lot of electronics, we suggest to keep an eye on sales/discounts.</p>
              <Button className="btn-fill pull-right" variant="secondary">Save Money</Button>
            </div>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last 2 days left.</small>
          </div>
        </div>
      </>
    )
}
