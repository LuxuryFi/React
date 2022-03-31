import logo from './logo.svg';
import './App.css';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  
    const expense = [
      { title: 'Test1', date: new Date(2021, 11, 1), amount: 1000},
      { title: 'Test2', date: new Date(2021, 12, 1), amount: 1400},
      { title: 'Test2', date: new Date(2021, 11, 1), amount: 2400},
      { title: 'Test3', date: new Date(2021, 1, 1), amount: 1002},
    ];
  return (
    <div>
      <NewExpense/>
      <Expense items={expense}></Expense>
    </div>
    
  );
}

export default App;
