import React from 'react';

class Tasklist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tasks, remove } = this.props;
    const taskNode = tasks.map((task) => {
      return (<Task task={task} key={task.id} remove={remove}/>)
    });

    return (
      <section className='tasklist x-1 y-2-3'>
        <ul> { taskNode } </ul>
      </section>
    );
  }
}

export default Tasklist;