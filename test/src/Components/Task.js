import React from "react";
import "../task.css";

export default function Task(props) {
  
  return (
    <div key={props.task.id}>
      <p className={props.task.completed && "done"}>{props.task.text}</p>
      <button onClick={() => props.handleDelete(props.task.id)}>Delete</button>
      <button onClick={() => props.handleFinish(props.task.id)}>Finish</button>
    </div>
  );
}