import React, { useEffect, useState } from "react";
import { Counter } from "../Components/Counter";
import TaskAdd from "../Components/TaskAdd";
import TaskList from "../Components/TaskList";

const ToDoApp = () => {
  const Tasks = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Finish my Homeworks", completed: false },
    { id: 3, text: "watch the match", completed: false },
  ];

  const [TasksToDo, setTasksToDo] = useState(Tasks);
  const [showCounter, setShowCounter] = useState(true);

  const [tasksCount, setTasksCount] = useState(TasksToDo.length);

  console.log(TasksToDo.length);

  useEffect(() => {
    setTasksCount(TasksToDo.length + 2);
  }, [TasksToDo.length]);

  const handleDelete = (id) => {
    setTasksToDo(TasksToDo.filter((task) => task.id !== id));
  };

  const handleAdd = (task) => {
    setTasksToDo([...TasksToDo, task]);
  };

  const handleFinish = (id) => {
    setTasksToDo(
      TasksToDo.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })
    );
  };

  const handleCounter = () => {
    setShowCounter(!showCounter);
  };
  return (
    <>
      <div>
        <h6>We have {TasksToDo.length} tasks to do </h6>
        <h6>
          We are here using side effect by adding two to the total tasks , so
          the the new state will be {tasksCount}
        </h6>
        <TaskList
          taskList={TasksToDo}
          handleDelete={handleDelete}
          handleFinish={handleFinish}
        />
        <TaskAdd handleAdd={handleAdd} />
      </div>

      <button onClick={handleCounter}>
        {showCounter ? "Hide counter" : "Show counter"}
      </button>
      {showCounter && <Counter />}
    </>
  );
};

export default ToDoApp;
