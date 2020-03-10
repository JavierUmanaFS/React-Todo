import React from 'react';
import TodoList from './components/TodoList';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

const tasks = [{
  todo: '',
  id: new Date(),
  completed: false
}
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks,
      name: ''
    };
  }


  addTask = task => {
    const newTask = {
      todo: task,
      id: new Date(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };

  toggleCompleted = clickedID => {
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === clickedID) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          addTask={this.addTask}
        />
        <TodoList
          task={this.state.tasks}
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
