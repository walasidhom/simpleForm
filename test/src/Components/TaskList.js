import React from "react";
import Task from "./Task";

const TaskList = ({ taskList, handleDelete }) => {
  return (
    <div>
      <ul>
        {taskList.map((task, key) => (
          <Task key={key} task={task} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
