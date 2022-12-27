import React, { useEffect, useState } from "react";
import { Counter } from "../Components/Counter";
import TaskAdd from "../Components/TaskAdd";
import TaskList from "../Components/TaskList";

const ToDoApp = () => {
  return (
    <>
      <div>
        <TaskList />
        <TaskAdd />
      </div>
    </>
  );
};

export default ToDoApp;
