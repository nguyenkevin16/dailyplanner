import React from 'react';

class CalDates extends React.Component {
  constructor(props) {
    super(props);

    this.createDates = this.createDates.bind(this);
  }

  createDates(startDay, daysInMonth) {
    let dates = [];
    let splicedDates = [];

    for (let i = 0; i < startDay; i++) {
      dates.push(
        <div className='cal-cell cal-date flex-grid' key={ 'blank-' + i }></div>
      );
    }

    for (let j = 1; j <= daysInMonth; j++ ) {
      dates.push(
        <div className='cal-cell cal-date flex-grid' key={ 'date-' + j }>
          { j }
        </div>
      );
    }
    
    while (dates.length > 7) {
      splicedDates.push(dates.splice(0, 7));
    }

    for (let k = dates.length; k < 7; k++) {
      dates.push(
        <div className='cal-cell cal-date flex-grid' key={ 'blank-' + k }></div>
      )
    }

    splicedDates.push(dates);

    return splicedDates.map((dates, idx) => (
      <div className='cal-row flex-grid' key={ 'row-' + idx }> { dates } </div> 
    ));
  }

  render() {
    return(
      <section className='cal-dates flex-grid'>       
        {
          this.createDates(this.props.startDay, this.props.daysInMonth)
        }
      </section>
    );
  }
}

export default CalDates;