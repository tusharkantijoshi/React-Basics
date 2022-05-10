import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => { //! this prop is from ExpensesList
  return (
    <li>

      <Card className='expense-item'>

        <ExpenseDate date={props.date} />

        {/* ExpenseItem is parent to ExpenseDate, So ExpenseItem will share data to ExpenseDate by using attributes. Also here ExpenseItem is a child component to ExpensesList that's why ExpenseItem is receive data using props from ExpensesList. App -> Expenses -> ExpensesList -> ExpenseItem -> ExpenseDate */}


        <div className='expense-item__description'>

          <h2>{props.title}</h2>
          {/* ExpenseItem is the child component to ExpensesList, So ExpenseItem will receive data from ExpensesList using props */}

          <div className='expense-item__price'>${props.amount}</div>
        </div>

      </Card>

    </li>
  );
};

export default ExpenseItem;
