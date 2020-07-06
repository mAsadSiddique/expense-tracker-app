import React from 'react';
import './App.css';
import { TransactionProvider } from './transContext';
import Expense from './expense';

function App() {
    return ( <
        TransactionProvider >
        <
        Expense / >
        <
        /TransactionProvider>
    );
}

export default App;