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
                <td>{date}</td>
                <td className="td-actions">
                    <OverlayTrigger
                        overlay={
                            <Tooltip id="tooltip-488980961">
                                Edit Transaction
                            </Tooltip>
                        }
                    >
                        <Button
                            className="btn-simple btn-link p-1"
                            type="button"
                            variant="info"
                        >
                            <i className="fas fa-edit"></i>
                        </Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        overlay={
                            <Tooltip id="tooltip-506045838">Remove Transaction</Tooltip>
                        }
                    >
                        <Button
                            className="btn-simple btn-link p-1"
                            type="button"
                            variant="danger"
                            onClick={e=>props.deleteTransaction(id)}
                        >
                            <i className="fas fa-times"></i>
                        </Button>
                    </OverlayTrigger>
                </td>
            </tr>
    )
}
