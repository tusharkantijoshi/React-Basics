import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => { //! this prop is from ExpensesChart

  //! dataPoints is a object received from the ExpensesChart, so to extract just the value property and store it in a array we used map (map returns a new array) 
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

  const totalMaximum = Math.max(...dataPointValues); //! to find the max value with spread operator (max() is a vanilla JS method)

  return (

    <div className='chart'>


      {  //! using map on data received from the ExpensesChart
        props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        ))
      }

    </div>

  );
};

export default Chart;
