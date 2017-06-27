import React from 'react';

const CalHeader = (props) => {

  return(
    <div className='cal-header cal-row flex-grid'>       
      <span className='cal-cell flex-grid'> { '<' } </span>
      <span className='cal-title flex-grid'> { props.monthNames[props.month] + ' ' + props.year } </span>
      <span className='cal-cell flex-grid'> { '>' } </span>
    </div>
  );
}

export default CalHeader;