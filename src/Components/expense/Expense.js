import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expense.css';
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';
import ExpenseList from './ExpenseList';

function Expense(props) {
  const [filteredyear, setFilterYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filterExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredyear;
  });

  
  return (
    <Card className='expenses'>
      <ExpenseFilter 
        selected={filteredyear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expense ={filterExpense}/>
      <ExpenseList  items={filterExpense}/>
    </Card>
  );
}

export default Expense;
