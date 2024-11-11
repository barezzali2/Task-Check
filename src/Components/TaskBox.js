import React from 'react'

function TaskBox({children}) {
  return (
    <div className="task-box">
        {children}
    </div>
  )
}

export default TaskBox;