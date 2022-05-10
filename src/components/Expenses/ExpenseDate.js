import React from 'react';

import './ExpenseDate.css';

const ExpenseDate = (props) => { //! this props is from ExpenseItem

  //! ExpenseDate is the child component to ExpenseItem, So ExpenseDate will receive data from ExpenseItem using props
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  //! ExpenseItem shared data with ExpenseDate by (key = date) so ExpenseDate should receive data with the same key name as it's value (props.date)

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
