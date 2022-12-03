import { Component } from 'react';
import  TaskAdd  from './Components/TaskAdd';
import TaskList from './Components/TaskList';

class App extends Component {
  state = {
    Tasks: [
      { id: 1, text: 'Learn React' },
      { id: 2, text: 'Finish my Homeworks' },
      { id: 3, text: 'watch the match' }
    ]
  };

  handleDelete = (id) => {
    this.setState({
      Tasks: this.state.Tasks.filter((task) => task.id !== id)
    })
  }
  
  render() {
    return (
      <div>
        <TaskList
          taskList={this.state.Tasks}
          handleDelete={this.handleDelete} />
        <TaskAdd />
      </div>
      
    )
  }
}

export default App;