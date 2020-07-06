import React, { useState, useContext } from 'react';
import { TransactionContext } from './transContext';

function Transcation() {
    let { addTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);
    console.log(typeof newAmount)
    console.log(typeof newDesc)

    const handleAddition = (event) => {
        event.preventDefault()
        if (Number(newAmount) === 0 || Number(newAmount) === -0) {
            alert("Number Should be Greater than Zero ")
            return false;
        }
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc,

        })
    }
    return ( <
        div >
        <
        h3 > Add new Transcation < /h3> <
        hr / >
        <
        form className = "Transaction-form"
        onSubmit = { handleAddition } >
        <
        label >
        Enter Description < br / >
        <
        input type = "text"
        placeholder = "Description"
        onChange = {
            (ev) => setDesc(ev.target.value) }
        required / >
        <
        /label> <
        br / >
        <
        label >
        Enter Amount < br / >
        <
        input type = "number"
        placeholder = "Amount"
        onChange = {
            (ev) => setAmount(ev.target.value) }
        required / >
        <
        /label> <
        br / >
        <
        input type = "submit"
        value = "Add Transaction" / >
        <
        /form> <
        /div>
    )
}

export default Transcation;