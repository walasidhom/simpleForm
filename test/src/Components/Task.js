import React from 'react'

//task is a function where are tasks and to manage buttons delete and finish
export default function Task(props) {
    
    return (
            <div key={props.task.id}>
                <p>{props.task.text}</p>
                <button onClick={() => props.handleDelete(props.task.id)}> Delete </button>
                <button onClick={() => {this.props.handleFinish(props.task.id)} }>Finish</button>
            </div>
        );
}
