import React, { useState} from 'react';

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"

const ExpenseItem = (props) => {
  /*
     React Components are just 
     JS functions, 
     inside the js function we write the JSX react friendly code

    When we pass the clickHandler function in our JSX code, we do not want to 
    add parenthesis, because that would make the function execute when the code is passed
    instead we want our function to listen for the onClick property to be executed.
    If we create a function that is attached to an event listener, we want to end the name with
    'Handler' so we know its a function that is waiting for an event.
     */
  
  const [title, setTitle] = useState(props.title);



  const clickHandler = () => {
    setTitle('Updated');

  };
  
  

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
