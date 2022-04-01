import logo from './logo.svg';
import './App.css';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

function App() {
    const exampleData = [
      { title: 'Test1', date: new Date(2021, 11, 1), amount: 1000},
      { title: 'Test2', date: new Date(2021, 12, 1), amount: 1400},
      { title: 'Test2', date: new Date(2021, 11, 1), amount: 2400},
      { title: 'Test3', date: new Date(2021, 1, 1), amount: 1002},
    ];

    const [ expenses, setExpenses ] = useState(exampleData);

    const addExpenseHandler = (expenseData) => {
      setExpenses(( prevState) => {
        return [...prevState, expenseData]
      })
    }

  return (
    <div>
      <NewExpense onAddNewExpense={addExpenseHandler}/>
      <Expense items={expenses}></Expense>
    </div>
  );
}

export default App;
