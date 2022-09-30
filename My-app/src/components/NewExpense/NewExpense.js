import React, { useState } from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const ExpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(ExpenseData);
    };
    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    }
    const stopEditingHandler = () => {
        setIsEditing(false);
    }
    return <div className="new-expense">
        {/*onSaveExpenseData- our function that is triggered when smth happens inside of this componends
        in our case, when user submit the data */}
        {!isEditing && <button onClick={startEditingHandler}>wydaj kase portfel niech płacze</button>}
        {isEditing && <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onStopEditing={stopEditingHandler}
        />}{/*we dont trigger this function
        because we dont use (), we only ponit at the function*/}
    </div>
};

export default NewExpense;