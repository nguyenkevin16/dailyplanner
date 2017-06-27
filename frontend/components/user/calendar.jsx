import React from 'react';
import CalHeader from './cal-header';
import CalWeekdays from './cal-weekdays';

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
        <CalWeekdays dayNames={ this.state.dayNames }/>
      </section>
    );
  }
}

export default Calendar;