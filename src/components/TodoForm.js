import React, { Component } from 'react'

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      task: ''
    };
  }

  handleChanges = e => {
    this.setState({
      task: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({
      item: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name='task'
          autoComplete='off'
          value={this.state.task}
          onChange={this.handleChanges}
        />
        <button>Add Task</button>
      </form>
    )
  }
}

export default TodoForm;