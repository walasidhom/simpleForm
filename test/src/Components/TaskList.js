import React from 'react'
import Task from './Task';

const TaskList = ({taskList , handleDelete}) => {
        

  return (
      <div>
          <ul>
              {taskList.map((e, key) =>
              <Task key={key}
                  text={e.text}
                  handleDelete={handleDelete} />)}
          </ul>
    </div>
  )
}

export default TaskList