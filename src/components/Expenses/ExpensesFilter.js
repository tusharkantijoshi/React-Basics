import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => { //! this prop is from Expenses
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value); //! here we are using custom event listener (onChangeFilter) for sending data to parent 
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>

        <label>Filter by year</label>

        <select value={props.selected} onChange={dropdownChangeHandler}>
          {/*//! onChange event listener */}
          {/* //! here we are using value attribute with custom event listener (selected) for sending data to parent */}

          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

//! ExpensesFilter is a uncontrolled component to Expenses bcz both the value, as well as changes to the value are not handled in the component itself but in a parent component (Expenses). 

 //! Expenses is a controlled component to ExpensesFilter bcz both the value, as well as changes to the value are not handled in the component itself but in a parent component. 

