import { useState } from "react";
import TaskAdd from "./Components/TaskAdd";
import TaskList from "./Components/TaskList";

const App =() => {
  const Tasks= [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Finish my Homeworks", completed: false },
    { id: 3, text: "watch the match", completed: false }
  ];
  
  const[TasksToDo, setTasksToDo] = useState(Tasks);

  const handleDelete = (id) => {
    setTasksToDo(TasksToDo.filter((task) => task.id !== id))
    
  };

  const handleAdd = (task) => {
    setTasksToDo(...TasksToDo, task);
  };

  const handleFinish = (id) => {
    setTasksToDo(
      TasksToDo.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      }),
    );
  };

  
    return (
      <div>
        <TaskList
          taskList={TasksToDo}
          handleDelete={handleDelete}
          handleFinish={handleFinish}
        />
        <TaskAdd handleAdd={handleAdd} />
      </div>
    );
  }


export default App;