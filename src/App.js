import React, {useState} from 'react';
import './App.css';
import Expense from './Components/expense/Expense';


import NewExpense from './Components/NewExpense/NewExpense';

const DummyExpense =[
  {
    id:'s1',
    title: 'Newspaper',
    amount: 200.2,
    date: new Date(2020, 11, 10)
  },
  {
    id:'s2',
    title: 'Loan',
    amount: 300.5,
    date: new Date(2021,8, 1)
  },
  {
    id:'s2',
    title: 'New TV',
    amount: 400.2,
    date: new Date(2022, 6, 10)
  },
  {
    id:'s4',
    title: 'vegetable',
    amount: 100.3,
    date: new Date(2021, 4, 9)
  }
];


function App() {

  const [expenses, setExpense] =useState(DummyExpense);
  const addExpensehandler = expense =>{
    setExpense((preExpense) =>{
      return[expense,...preExpense]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense = {addExpensehandler} />
      <Expense items={expenses}/>
    </div>
  );
}

export default App;
