import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, finishTodo } from "../JS/actions/todoActions";
import "../task.css";

export default function Task({ task }) {
  const dispatch = useDispatch();
  console.log(task.text);
  const handleDelete = () => {
    dispatch(deleteTodo(task.id));
  };

  const handleFinish = () => {
    dispatch(finishTodo(task.id));
  };

  return (
    <div key={task.id}>
      <p className={task.completed && "done"}>{task.text}</p>
      <button onClick={handleDelete(task.id)}>Delete</button>
      <button onClick={handleFinish(task.id)}>Finish</button>
    </div>
  );
}
