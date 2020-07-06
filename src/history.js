import React, { useContext, useState } from 'react';
import Transcation from './newTransaction';
import { TransactionContext } from './transContext';

function History() {
    let { transactions } = useContext(TransactionContext);


    return ( <
        div >
        <
        h3 > History < /h3> <
        hr / >
        <
        ul className = "Transaction-list" > {
            transactions.map((transObj, ind) => {
                return ( < li key = { ind } >
                    <
                    span > { transObj.desc } < /span> <
                    span > { transObj.amount } < /span> <
                    /li>
                )
            })
        } <
        /ul> <
        Transcation / >
        <
        /div>
    )
}

export default History;