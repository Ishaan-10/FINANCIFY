import React,{useState} from 'react';
import Tesseract from 'tesseract.js';
import Modal from "components/modelScan";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    const [modalShow, setModalShow] = useState(false);
    const [imagePath, setImagePath] = useState("");
    const [text, setText] = useState("");
    const [confidence,setConfidence]=useState("");
    const [loading,setLoading]=useState(false);
    const [five,setFive]=useState([]);
    const [modalNumber,setmodalNumber]=useState(0);

    const notifySuccess = (message) => toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    const notifyFailure = ()=>toast.error("An Error Occured", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

    const handleChange = (event) => {
        setImagePath(URL.createObjectURL(event.target.files[0]));
    }
    const closeModel = ()=>{
      setModalShow(false)
    }

    const handleClick = () => {
        setLoading(true)
        notifySuccess("Job started , it may take few minutes")
        Tesseract.recognize(
          imagePath,'eng',
          { 
            logger: m => console.log(m) 
          }
        )
        .catch (err => {
          console.error(err);
          setLoading(false)
          notifyFailure()
        })
        .then(result => {
          setLoading(false)
          console.log(result)
          const confidence = result.data.confidence;
          const text = result.data.text;
          notifySuccess("Job completed")
          setText(text);
          setFive(analyzeResult(result.data))
          setConfidence(confidence);
        })
      }
    
      const analyzeResult = (data)=>{

        const wordsArray = data.words.map(word=>parseInt(word.text))

        const numbers = wordsArray.filter(word=> !Object.is(NaN,word))
        const numbersSorted = numbers.sort((a, b)=>a - b);
        console.log(numbersSorted)
        const topFiveNums = numbersSorted.slice(numbersSorted.length-3)
        console.log(topFiveNums)
        return topFiveNums.reverse();
      }
    return (
        <>
        <ToastContainer />
        <Card classname="text-center" border="dark" style={{ width: 'auto' }}>
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
          {five.map((one,index)=>{
            return (
              <Col style={{marginLeft: '1rem'}}>
              <Button className="btn-fill pull-right" variant="info"
              onClick={() =>{
                setmodalNumber(one)
                setModalShow(true)
              }}>
              {one}
              </Button>
              <Modal closeModel={closeModel} amount={modalNumber} show={modalShow} onHide={() => setModalShow(false)}/>
            </Col>
            )
            }
          )
          }

        </Row>
        <Row>
          <Col md="6">
            <Card.Body>
            <Button className="btn-fill pull-right" variant="success" type="submit" onClick={handleClick}>Convert To Text</Button>
            <div>
              <br></br>
              <img src={imagePath} className="my-2" style={{width:400}} />
            </div>
            </Card.Body>
          </Col>
          <Col classname="pl-5" md="6" >
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
