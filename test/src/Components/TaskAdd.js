import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../JS/actions/todoActions";

const TaskAdd = (props) => {
  const [textAdded, setTextAdded] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setTextAdded(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  const handleAdd = () => {
    dispatch(addTodo({ id: Math.random(), text: textAdded, completed: false }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="task"
          placeholder="Add your task here"
          onChange={handleChange}
        />

        <button onClick={handleAdd}>add task</button>
      </div>
    </form>
  );
};

export default TaskAdd;
