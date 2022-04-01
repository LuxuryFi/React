import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expense.css'
import ExpenseFilter from './ExpenseFilter.js'


function Expense (props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    
    <div className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.items.map(item => {
        const { title, amount, date } = item;
        return (
           <ExpenseItem 
            title={title}
            date={date}
            amount={amount} 
          >
          </ExpenseItem>
        )
      })}
     
    </div>
  )
}

export default Expense;