import React from 'react';

const CalHeader = (props) => {

  return(
    <div className='cal-row flex-grid'>       
      <span className='cal-cell flex-grid'> { '<' } </span>
      <span className='cal-title flex-grid'> { props.state.monthNamesFull[props.state.month] } { props.state.year } </span>
      <span className='cal-cell flex-grid'> { '>' } </span>
    </div>
  );
}

export default CalHeader;