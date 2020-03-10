import React from 'react';
import './Todo.css';

const Todo = props => {
  return (
    <div
      onClick={() => props.toggleCompleted(props.task.id)}
      className={`${props.task.completed ? 'completed' : ''}`}
    >
      <h2>{props.task.todo}</h2>
    </div>
  )
}

export default Todo;