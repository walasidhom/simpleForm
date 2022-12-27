import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const TaskList = () => {

  const tasks = useSelector((store) => store.todoReducer.Tasks);
 
  return (
    <div>
      <ul>
        {tasks.map((task, key) => (
          <Task
            key={key}
            task={task}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;