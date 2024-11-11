import React from 'react'

function TaskList({children}) {
  return (
    <div className="task-list">
      {children}
    </div>
  )
}

export default TaskList;