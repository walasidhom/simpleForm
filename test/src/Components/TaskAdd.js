import React, { useState } from "react";

const TaskAdd = (props) => {
  const [textAdded, setTextAdded] = useState("");

  const handleChange = (event) => {
    setTextAdded(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  const handleAdd = () => {
    return props.handleAdd({
      id: Math.random(),
      text: textAdded,
    });
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
