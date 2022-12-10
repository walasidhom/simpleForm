import { Component } from 'react';
import { Container , Form } from 'react-bootstrap';
import TaskList from './Components/TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
      id: "",
      text: "",
      Tasks: [
        { id: 1, text: 'Learn React' },
        { id: 2, text: 'Finish my Homeworks' },
        { id: 3, text: 'watch the match' }
      ]
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
     
  }

  handleDelete = (id) => {
    this.setState({
      Tasks: this.state.Tasks.filter((task) => task.id !== id)
    })
  }

  handleFinish = (id) => {
    const newTasks = this.state.Tasks.map(task => {
      if (task.id === id) {
        return <span style={{ textDecoration: 'line-through' }}>{task}</span>;
      }
      else {
        return task;
      }
    });
    this.setState({ Tasks: newTasks });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const { id, text } = this.state;    
    const newtask = {
      id: id,
      text: text 
    };

    this.setState(prevState => ({
      Tasks: [...prevState.Tasks , newtask ]
    }));
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <TaskList
          taskList={this.state.Tasks}
          handleDelete={this.handleDelete} />
          <Container>
              <Form onSubmit={this.handleSubmit}>
                <div>
                    <input
                          type="text"
                          placeholder="Add your task here"
                          name="text"
                          value={this.state.text}
                          onChange={this.handleInputChange} />
                    <button>add task</button>
                </div>  
              </Form>
          </Container>
      </div>
      
    )
  }
}

export default App;