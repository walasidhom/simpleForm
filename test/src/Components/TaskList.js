import React from "react";
import Task from "./Task";

const TaskList = ({ taskList, handleDelete, handleFinish }) => {
  return (
    <div>
      <ul>
        {taskList.map((task, key) => (
          <Task
            key={key}
            task={task}
            handleDelete={handleDelete}
            handleFinish={handleFinish}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
