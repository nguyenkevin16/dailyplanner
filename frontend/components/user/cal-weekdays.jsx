import React from 'react';

const CalWeekdays = (props) => {

  return(
    <div className='cal-weekdays cal-row flex-grid'>
      {
        props.dayNames.map(day => <div className='cal-cell flex-grid' key={ day }> { day } </div> )
      }
    </div>
  );
}

export default CalWeekdays;