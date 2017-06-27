import React from 'react';
import CalHeader from './cal-header';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    let date = new Date();

    this.state = {
      year: date.getFullYear(),
      month: date.getMonth(),
      startDay: 1,
      dayNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      monthNamesFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    };
  }

  render() {
    return(
      <section className='cal flex-grid-col x-1 y-1-3'>
        <CalHeader state={ this.state }/>
        
        <div className='cal-row flex-grid'>
          {
            this.state.dayNames.map(day => <div className='cal-cell flex-grid' key={ day }> { day } </div> )
          }
        </div>
      </section>
    );
  }
}

export default Calendar;

{/*<WeekDays dayNames={this.state.dayNames} />*/}