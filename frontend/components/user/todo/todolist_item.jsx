import React from 'react';

const TodoItem = ({task, remove}) => (
  <li onClick={remove(task.id)}>
    {task.text}
  </li>
)

export default TodoItem;