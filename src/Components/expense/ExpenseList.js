import React from "react";

import './ExpenseList.css';
import Expenseitem from "./Expenseitem";

function ExpenseList(props){
    let expenseContent = <p>No expense found</p>;
    // if(props.length ==- 0){
    //     return(
            
    //     )
    // }
    return(
        <ul className="expense-list">
            <Expenseitem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
        </ul>
    );
};

export default ExpenseList;