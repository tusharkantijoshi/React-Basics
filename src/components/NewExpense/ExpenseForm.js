import React, { useState } from 'react'; //! imported useState from React library because we need to change form inputs 

import './ExpenseForm.css';

const ExpenseForm = (props) => {

  //! useState
  //* Multiple States
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //* if one States
  /*   
  const [userInput, setUserInput] = useState(
    //* object
    {
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
  }); 
  */

  //! function for event listener: onChange
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //* event is an object which has a target property which have a value property to get the input value (vanilla JS concept)

    /*  
    ! with one state
    * if the present state does not depend upon previous state
    setUserInput({
      * spread operator to restore all other data
       ...userInput,
       
       //* update/ over write required property
       enteredTitle: event.target.value,
    });

    * if the present state depends upon previous state 
    setUserInput((prevState) => {
       return { ...prevState, enteredTitle: event.target.value };
    }); 
    */
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };


  //! function for event listener: onSubmit in form
  const submitHandler = (event) => {
    event.preventDefault(); //* to prevent reloading of the whole page when the submit button is clicked

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    /*//! we are sending the data to NewExpense, which is the parent of ExpenseForm (sharing data from child to parent) by lifting the state up. We're not keeping state in ExpenseForm instead, we are lifting it up to the NewExpense component 
    //! we are using a custom event listener (onSaveExpenseData) in the parent component and sending data using props through child component. The name should be same in the child and parent component 
    */

    //* to clear the entered inputs after submitting
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    /* 
    * We can now implement two-way binding, which simply means that for inputs we don't just listen to changes, but we can also pass a new value back into the input. So that we can reset or change the input programmatically. We do this by adding value attribute in input element. Two-way binding is very useful when you're working with forms because it allows you to gather user input, but then also change it.
    */
  };

  return (

    <form onSubmit={submitHandler}> {/*//! event listener: onSubmit bcz of the button */}

      <div className='new-expense__controls'>

        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle} //! value attribute for two-way binding  
            onChange={titleChangeHandler} //! event listener: onChange
          />
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount} //! value attribute for two-way binding 
            onChange={amountChangeHandler} //! event listener: onChange
          />
        </div>

        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate} //! value attribute for two-way binding 
            onChange={dateChangeHandler} //! event listener: onChange
          />
        </div>

      </div>

      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>

        {/* //* If a button, especially with type submit is pressed inside of a form, this overall form element will emit an submit event (onSubmit) and then execute some function whenever this form is being submitted.
        */}

      </div>

    </form>

  );
};

export default ExpenseForm;
