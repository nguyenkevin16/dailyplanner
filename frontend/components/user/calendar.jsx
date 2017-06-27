import React from 'react';
import CalHeader from './cal-header';
import CalWeekdays from './cal-weekdays';
import CalDates from './cal-dates';

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
      daysInMonth: null
    };

    this.calc = this.calc.bind(this);
  }

  componentWillMount() {
    this.setState(this.calc(this.state.year, this.state.month));
  }

  calc(year, month) {
    return {
      startDay: new Date(year, month, 1).getDay(),
      daysInMonth: new Date(year, month + 1, 0).getDate()
    };
  }

  render() {
    return(
      <section className='cal flex-grid-col x-1 y-1-3'>
        <CalHeader 
          monthNames={this.state.monthNamesFull} 
          month={this.state.month} 
          year={this.state.year} 
          onPrev={this.getPrev} 
          onNext={this.getNext}/>
        <CalWeekdays 
          dayNames={this.state.dayNames}/>
        <CalDates
          startDay={this.state.startDay} 
          daysInMonth={this.state.daysInMonth}
          onSelect={this.selectDate}/>
      </section>
    );
  }
}

export default Calendar;