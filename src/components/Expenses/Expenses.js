import React, { useState } from 'react';  //! useState bcz we are changing the year

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  //! useState to change the year
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear); //! useState function to change the year received by rhe child component  
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>

        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/*//! two custom event listener (selected and onChangeFilter) receiving data from ExpensesFilter (child to parent) */}

        <ExpensesChart expenses={filteredExpenses} /> {/* //! sending filtered year to ExpensesChart, (parent to child using attribute) */}

        <ExpensesList items={filteredExpenses} />

      </Card>

    </div>
  );
};

export default Expenses;
