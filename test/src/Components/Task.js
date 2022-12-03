import React from "react";

export default function Task(props) {
  return (
    <div key={props.task.id}>
      <p>{props.task.text}</p>
      <button onClick={() => props.handleDelete(props.task.id)}>Delete</button>
      <button>Finish</button>
    </div>
  );
}
