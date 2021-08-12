import React, { useState } from 'react'
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
  var moment = require('moment');

export default function SubscriptionRow(props) {
    const [SNo, setSNo] = useState(props.sNo)
    const [name, setName] = useState(props.name)
    const [amount, setAmount] = useState(props.amount)
    const [repeatDuration,setRepeatDuration]=useState(props.repeatDuration);
    const [date, setDate] = useState(props.date)
    const id = props._id
    return (
            <tr>
                <td>{SNo}</td>
                <td>{name}</td>
                <td>{amount}</td>
                <td>{repeatDuration}</td>
                <td>{moment(date).format("DD/MM/YY HH:mm")}</td>
                <td className="td-actions">
                    <OverlayTrigger
                        overlay={
                            <Tooltip id="tooltip-506045838">Remove Transaction</Tooltip>
                        }
                    >
                        <Button
                            className="btn-simple btn-link p-1"
                            type="button"
                            variant="danger"
                            onClick={e=>props.deleteSubscription(id)}
                        >
                            <i className="fas fa-times"></i>
                        </Button>
                    </OverlayTrigger>
                </td>
            </tr>
    )
}
