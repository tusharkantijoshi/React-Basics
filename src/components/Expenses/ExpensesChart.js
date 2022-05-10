import React from 'react';

import Chart from '../Chart/Chart';

const ExpensesChart = (props) => { //! this prop is from Expenses

  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const expense of props.expenses) { //! expenses give filtered year as string
    const expenseMonth = expense.date.getMonth(); //! extracting months from the filtered year

    //! adding amount in chartDataPoints
    chartDataPoints[expenseMonth].value += expense.amount; //! amount is from App, so now the values will not be 0
  }

  return (
    <Chart dataPoints={chartDataPoints} />
  ); //! sending(chartDataPoints object) to Chart, (parent to child using attribute)
};

export default ExpensesChart;

//! Data transfer: Expenses -> ExpensesChart -> Chart -> ChartBar
