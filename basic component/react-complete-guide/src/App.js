import React,{useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const INTIALEXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: "2020-07-14",
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: "2021-02-12" },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: "2021-02-28",
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: "2021-05-12",
    }
  ];

  const [expenses,setExpenses] = useState(INTIALEXPENSES)
  const addExpense = (expense)=>{
    setExpenses((preExpenses)=>{
      return [expense,...preExpenses]
    })
  }


  return (
    <div>
      <NewExpense addExpense={addExpense} />
      <Expenses items = {expenses}/>
    </div> 
  );
}

export default App;
