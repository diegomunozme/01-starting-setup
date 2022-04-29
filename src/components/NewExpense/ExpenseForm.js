import React, { useState } from "react";

import "./ExpenseForm.css";
const ExpenseForm = () => {
  /*
    For the user input, we're going to want 
    to allow the users to input a date, a type of purchase and quantity 
    so a total of three inputs per new expense
    */

  //Destructuring to listen for the new title entered
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value);
    };

  //Destructuring to listen for the new Amount entered
  const [enteredAmount, setEnteredAmount] = useState("")
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  //Destructuring to listen for new Time Entered
  const [enteredTime, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
