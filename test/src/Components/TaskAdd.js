import React, { Component } from "react";

class TaskAdd extends Component {
  state = { newId: Math.random(), textAdded: "" };
  handleChange = (event) => {
    this.setState({ textAdded: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  handleAdd = () => {
    return this.props.handleAdd({
      id: this.state.newId,
      text: this.state.textAdded,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="task"
            placeholder="Add your task here"
            onChange={this.handleChange}
          />

          <button onClick={this.handleAdd}>add task</button>
        </div>
      </form>
    );
  }
}

export default TaskAdd;
