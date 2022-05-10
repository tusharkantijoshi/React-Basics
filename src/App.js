import React, { useState } from 'react'; //! useSate for updating DUMMY_EXPENSES

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  //! useState
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  //! function after receiving the data from the child component
  const addExpenseHandler = (expense) => {

    //! setExpenses()
    //* present state depends upon previous state
    setExpenses((prevExpenses) => {
      //! returned the array with newly added expense along with all the previous expenses (pulled out using the spread operator) 
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} /> {/*//! receiving data from NewExpense (child to parent) */}

      <Expenses items={expenses} />
    </div>
  );
};

export default App;
