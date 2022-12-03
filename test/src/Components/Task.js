import React from 'react'

export default function Task(props) {
    
    return (
            <div key={props.id}>
                <p>{props.text}</p>
                <button onClick={() => props.handleDelete(props.id)}>Delete</button>
                <button>Finish</button>
            </div>
        );
}