import React, { useContext } from 'react';
import History from './history';
import { TransactionContext } from './transContext';

function Expense() {
    let { transactions } = useContext(TransactionContext);
    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income += transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }
    return ( <
        div className = "container" >
        <
        h2 className = "text-align" > Expense Tracker < /h2> <
        h3 > Your balance: { getIncome() + getExpense() } < /h3>

        <
        div >
        <
        div className = "Expense-container" >
        <
        h3 > Income < br / > { getIncome() } < /h3> <
        h3 > Expense < br / > { getExpense() } < /h3> <
        /div> <
        History / >
        <
        /div> <
        /div>
    )
}

export default Expense;