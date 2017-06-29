import React from 'react';
import TodoItem from './todolist_item';

class Todolist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos, remove } = this.props;
    const todoNode = todos.map((todo) => {
      return (<TodoItem todo={todo} key={todo.id} remove={remove}/>)
    });

    return (
      <section className='Todolist x-1 y-2-3'>
        <ul> { todoNode } </ul>
      </section>
    );
  }
}

export default Todolist;