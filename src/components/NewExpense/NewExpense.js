import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  //! function after receiving the data from the child component 
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, //! spread operator to pull out the object data
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData); //! sending data from NewExpense to App (child to parent) by lifting the state up. We're not keeping state NewExpense instead, we are lifting it up to the App component
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        /> //! Here we are receiving data from the child component (ExpenseForm) using a custom event listener (onSaveExpenseData) the name should be same in the child component (props.onSaveExpenseData) 
      )}
    </div>
  );
};

export default NewExpense;
