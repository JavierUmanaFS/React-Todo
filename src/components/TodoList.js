// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import Todo from './Todo';

const TodoList = props => {
  console.log(props)
  return (
    <div>
      {props.task.map(todo => (
        <Todo
          key={todo.id}
          task={todo}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
      <button onClick={props.clearCompleted}>
        Clear Completed
        </button>
    </div>
  )
}

export default TodoList;