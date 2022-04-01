import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [ enteredTitle, setEnteredTitle ] = useState('');
  const [ enteredAmount, setEnteredAmount ] = useState('');
  const [ enteredDate, setEnteredDate ] = useState('');
  const [ submit, setSubmit ] = useState('');
  // const [ userInput, setUserInput ] = useState({
  //   enteredAmount: '',
  //   enteredTitle: '',
  //   enteredDate: ''
  // })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
    // setUserInput((prevState) => {
    //   return { ... prevState, enteredTitle: event.target.value,};
    // })
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }
 

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }
    props.onSaveExpenseData(expenseData);

    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
  }



  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
          <label>Amount</label>
          <input type="text" value={enteredAmount} min="0" step="1" onChange={amountChangeHandler}/>
          <label>Title</label>
          <input type="date" value={enteredDate} min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" >Submit</button>
      </div>
    </form>
  )
}

export default ExpenseForm;