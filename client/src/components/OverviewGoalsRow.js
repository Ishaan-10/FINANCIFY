import React from 'react'
import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
    Form,
    OverlayTrigger,
    Tooltip,
  } from "react-bootstrap";

export default function OverviewGoalsRow(props) {

    const {goal}=props;

    return (
        
            <tr>
                <td>
                    <Form.Check className="mb-1 pl-0">
                        <Form.Check.Label>
                            <Form.Check.Input
                                defaultValue=""
                                type="checkbox"
                            ></Form.Check.Input>
                            <span className="form-check-sign"></span>
                        </Form.Check.Label>
                    </Form.Check>
                </td>
                <td>
                    {goal}
                </td>
            </tr>
        
    )
}
