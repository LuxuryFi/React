import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';

function App() {
  
    const expense = [
      { title: 'Test1', date: new Date(2021, 11, 1), amount: 1000},
      { title: 'Test2', date: new Date(2021, 12, 1), amount: 1400},
      { title: 'Test2', date: new Date(2021, 11, 1), amount: 2400},
      { title: 'Test3', date: new Date(2021, 1, 1), amount: 1002},
    ];
  return (
    
   <div>
      <h2>Test</h2> 
      <ExpenseItem 
      title={expense[0].title}
      date={expense[0].date}
      amount={expense[0].amount} 
      >
      </ExpenseItem>
        <ExpenseItem 
        title={expense[1].title}
        date={expense[1].date}
        amount={expense[1].amount} 

        >

      </ExpenseItem>

      <ExpenseItem 
       title={expense[2].title}
        date={expense[2].date}
        amount={expense[2].amount} 
      >
      </ExpenseItem>

      <ExpenseItem  
        title={expense[3].title}
        date={expense[3].date}
        amount={expense[3].amount} 
      >
      </ExpenseItem>

   </div>
  );
}

export default App;
