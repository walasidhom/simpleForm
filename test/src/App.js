import { Component } from "react";
import TaskAdd from "./Components/TaskAdd";
import TaskList from "./Components/TaskList";

class App extends Component {
  state = {
    Tasks: [
      { id: 1, text: "Learn React", completed: false },
      { id: 2, text: "Finish my Homeworks", completed: false },
      { id: 3, text: "watch the match", completed: false },
    ],
  };

  handleDelete = (id) => {
    this.setState({
      Tasks: this.state.Tasks.filter((task) => task.id !== id),
    });
  };

  handleAdd = (task) => {
    this.setState({ Tasks: [...this.state.Tasks, task] });
  };

  handleFinish = (id) => {
    this.setState({
      Tasks: this.state.Tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      }),
    });
  };

  render() {
    return (
      <div>
        <TaskList
          taskList={this.state.Tasks}
          handleDelete={this.handleDelete}
          handleFinish={this.handleFinish}
        />
        <TaskAdd handleAdd={this.handleAdd} />
      </div>
    );
  }
}

export default App;
