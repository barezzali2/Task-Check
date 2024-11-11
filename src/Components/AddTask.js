import React from 'react'

function AddTask({task, setTask, onHandleText}) {
  return (
    <div className='add-task pt-1 pb-5'>
        <h2>Add your task for today</h2>
        <input 
          type="text" 
          placeholder='Add a task' 
          className='add-input' 
          value={task} 
          onChange={(e) => setTask(e.target.value)}
        />
        <button className='mt-5 ml-44' onClick={onHandleText}>Add Task</button>
    </div>
  )
}

export default AddTask;