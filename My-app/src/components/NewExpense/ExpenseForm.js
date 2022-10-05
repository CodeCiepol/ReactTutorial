import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    //multi states:
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // // you can use only one State for all input:
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });


    const titleChangeHandler = (event) => {
        // // multi states:
        setEnteredTitle(event.target.value);

        // // single state for all
        // // worse option:
        //     setUserInput({
        //         ...userInput,
        //         enteredTitle: event.target.value,
        //     });

        // this is the best option to keep the latest entered values "the savier way":
        // setUserInput((prevState) => {
        //     return {...prevState,enteredTitle:event.target.value };
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const ExpenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(ExpenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.onStopEditing();
    };
        return (
            <form onSubmit={submitHandler}> {/*only form can do submit*/}
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input
                            type="text"
                            value={enteredTitle}
                            placeholder='dziwki'
                            onChange={titleChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input
                            type='number'
                            min="0.01"
                            step="0.01"
                            value={enteredAmount}
                            onChange={amountChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input
                            type='date'
                            min="2019-01-01"
                            max="2022-12-31"
                            value={enteredDate}
                            onChange={dateChangeHandler} />
                    </div>
                    <div className="new-expense__actions">
                        <button type="submit">Add Expense</button>
                        <button onClick={props.onStopEditing}>Cancel</button>
                    </div>
                </div>
            </form>
        );
    };

export default ExpenseForm;