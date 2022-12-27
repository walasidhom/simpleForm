import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, finishTodo } from "../JS/actions/todoActions";
import "../task.css";

export default function Task(props) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(props.task.id))
  };

  const handleFinish = () => {
    dispatch ( finishTodo (props.task.id))
  }
  
  return (
    <div key={props.task.id}>
      <p className={props.task.completed && "done"}>{props.task.text}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleFinish}>Finish</button>
    </div>
  );
}