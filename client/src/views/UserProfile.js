import React,{useState,useEffect} from "react";
import {getIncome,createIncome,getProfile,updateProfile} from "../API"

// react-bootstrap components
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";
var moment = require('moment');

function User() {

  const [data,setData]=useState({});
  const [profileData,setProfileData]=useState({})
  const [newAmount,setNewAmount]=useState();
  const [newDate,setNewDate]=useState();
  const [newName,setNewName]=useState();
  const [newEmail,setNewEmail]=useState();

  const fetchIncome=async()=>{
    await getIncome().then((res)=>{
      console.log(res.data)
      setData(res.data)
      setPrevDate(data.salaryDate)
    }).catch(e=>console.log(e.message))
  }
  const fetchUserProfile=async()=>{
    await getProfile().then((res)=>{
      setProfileData(res.data)
    }).catch(e=>console.log(e.message))
  }
  // const updateUserProfile=async(name,email)=>{
  //   await updateProfile({name,email}).then((res)=>{
  //     console.log(res.data)
  //   }).catch(e=>console.log(e.message))
  // }
  
  const postIncome=async(amount,salaryDate)=>{
    console.log({amount,salaryDate})
    await createIncome({amount,salaryDate}).then((res)=>{
      console.log(res.data)
      fetchIncome()
    }).catch(e=>console.log(e.message))
  }
  useEffect(()=>{
    fetchIncome()
    fetchUserProfile()
  },[])

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pl-3" md="12">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control
                          defaultValue={profileData.email}
                          placeholder="Email"
                          type="email"
                          onChange={(e)=>setNewEmail(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pl-3" md="12">
                      <Form.Group>
                        <label>Name</label>
                        <Form.Control
                          defaultValue={profileData.name}
                          placeholder="Name"
                          onChange={(e)=>setNewName(e.target.value)}
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    variant="info"
                    onClick={()=>updateUserProfile(newName,newEmail)}
                  >
                    Update Profile
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={
                    require("assets/img/photo-1431578500526-4d9613015464.jpeg")
                      .default
                  }
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/index.png").default}
                    ></img>
                    <h5 className="title">{profileData.name}</h5>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Income Details</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>TOTAL INCOME</label>
                        <Form.Control
                          defaultValue={data.amount}
                          onChange={(e)=>setNewAmount(e.target.value)}
                          placeholder="income"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="6">
                      <Form.Group>
                        <label>Date at which you get your salary</label>
                        <Form.Control
                          placeholder="Date"
                          type="date"
                          onChange={(e)=>setNewDate(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    variant="info"
                    onClick={()=>postIncome(newAmount,newDate)}
                  >
                    Update Income
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default User;
