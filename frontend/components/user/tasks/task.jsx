import React from 'react';

const Task = ({task, remove}) => (
  <li onClick={remove(task.id)}>
    {task.text}
  </li>
)

export default Task;