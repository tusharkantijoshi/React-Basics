import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {

  //! to check if we have any expenses
  if (props.items.length === 0) {
    return (
      <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    );
  }

  return (
    <ul className='expenses-list'>


      {/*//! use {} because we wanna execute a dynamic expression (execute JavaScript expressions) in our JSX code  */}
      {
        props.items.map((expense) => ( //! receiving data from parent (Expenses) using props. used map() over the received object data and added ExpenseItem dynamically.

          <ExpenseItem
            key={expense.id} //! key is used by react for uniquely identify the data 
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />

        ))
      }

    </ul>
  );
};

export default ExpensesList;

/* 
! Map():
* Creates a new array from calling a function for every array element. It iterates its elements in insertion order — a for...of loop and calls a defined function once for each element.
*/