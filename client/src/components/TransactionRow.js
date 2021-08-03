import React, { useState } from 'react' 

export default function TransactionRow({}) {
    const [SNo, setSNo] = useState(null)
    const [name, setName] = useState(null)
    const [amount, setAmount] = useState(null)
    const [category, setCategory] = useState(null)
    const [mode, setMode] = useState(null)
    return (
        <div>
            <tr>
                <td>{SNo}</td>
                <td>{name}</td>
                <td>{amount}</td>
                <td>{category}</td>
                <td>{mode}</td>
                <td>Delete/Edit</td>
            </tr>
        </div>
    )
}
