import React from 'react'
import Task from './Task';

const TaskList = ({taskList , handleDelete , handleFinish}) => {
        

  return (
      <div>
          <ul>
              {taskList.map((e, key) =>
              <Task key={key}
                  task={e}
                  handleDelete={handleDelete}
                  handleFinish={handleFinish}/>)}
          </ul>
    </div>
  )
}

export default TaskList