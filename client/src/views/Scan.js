import React,{useState} from 'react';
import Tesseract from 'tesseract.js';
import Modal from "components/modelScan";
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
    OverlayTrigger,
    Tooltip
} from "react-bootstrap";
import { Spinner } from 'react-bootstrap';

export default function Scan() {
    const [modalShow, setModalShow] = React.useState(false);
    const [imagePath, setImagePath] = useState("");
    const [text, setText] = useState("");
    const [confidence,setConfidence]=useState("");
    const [loading,setLoading]=useState(false);

    const handleChange = (event) => {
        setImagePath(URL.createObjectURL(event.target.files[0]));
    }

    const handleClick = () => {
        setLoading(true)
        Tesseract.recognize(
          imagePath,'eng',
          { 
            logger: m => console.log(m) 
          }
        )
        .catch (err => {
          console.error(err);
          setLoading(false)
        })
        .then(result => {
          // Get Confidence score
          setLoading(false)
          console.log(result)
          const confidence = result.data.confidence;
         
          const text = result.data.text;
          setText(text);
          setConfidence(confidence);
      
        })
      }

    return (
        <>
        <Card classname="text-center" border="dark" style={{ width: '80rem' }}>
        <Card.Header as="h3">Scan Your Receipts</Card.Header>
        <hr></hr>
        <Row>
          <Col md="6">
            <Card.Body>
              <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Label>Click to upload</Form.Label>
                <Form.Control type="file" size="lg" onChange={handleChange} />
              </Form.Group>
            </Card.Body>
          </Col>
          <Col md="2">
            <Button className="btn-fill pull-right" variant="info" onClick={() => setModalShow(true)}>200</Button>
            <Modal show={modalShow} onHide={() => setModalShow(false)}/>
          </Col>
          <Col md="2">
            <Button className="btn-fill pull-right" variant="info" onClick={() => setModalShow(true)}>300</Button>
            <Modal show={modalShow} onHide={() => setModalShow(false)}/>
          </Col>
          <Col md="2">
            <Button className="btn-fill pull-right" variant="info" onClick={() => setModalShow(true)}>400</Button>
            <Modal show={modalShow} onHide={() => setModalShow(false)}/>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card.Body>
            <Button className="btn-fill pull-right" variant="success" type="submit" onClick={handleClick}>Convert To Text</Button>
            <div>
              <br></br>
              <img src={imagePath} style={{height:200,width:200}} />
            </div>
            </Card.Body>
          </Col>
          <Col classname="pl-4" md="6">
              {loading ? <Spinner /> : <div>
                { confidence && <h5>Conversion accuracy = {confidence}%</h5>}
                <p>{text}</p>
              </div>}
          </Col>
        </Row>
        </Card>
        </>
    )
}
