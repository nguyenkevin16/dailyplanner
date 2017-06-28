import React from 'react';

const CalHeader = (props) => {

  return(
    <div className='cal-header flex-grid-col x-1'>    
      <div className='cal-nav flex-grid x-1'>
        <span className='cal-cell flex-grid'> { '<' } </span>
        <span className='cal-title flex-grid'> { props.monthNames[props.month] + ' ' + props.year } </span>
        <span className='cal-cell flex-grid'> { '>' } </span>
      </div>

      <div className='cal-weekdays flex-grid x-1'>
        {
          props.dayNames.map(day => <div className='cal-cell flex-grid' key={ day }> { day } </div> )
        }
      </div>
    </div>
  );
}

export default CalHeader;