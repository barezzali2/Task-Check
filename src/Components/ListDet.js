import React, { useState } from 'react';

function ListDet({ tasks }) {

 const [completedTasks, setCompletedTasks] = useState(Array(tasks.length).fill(false));


 function handleToggle(index) {
  const updatedTasks = [...completedTasks];
  updatedTasks[index] = !updatedTasks[index];
  setCompletedTasks(updatedTasks);
 }

  
  return (
    <div className='list-details'>
      <h2>To Do List</h2>
      {tasks.length === 0 ? (
        <p>Add you tasks here.</p>
      ) : (
        tasks.map((task, index) => (
          <div key={index}>
            <input 
             type="checkbox"
             id={`task-${index}`}
             className='checkboxIn'
             checked={completedTasks[index]}
             onChange={() => handleToggle(index)}
             />  

            <label 
            className='tasksL pl-1' 
            htmlFor={`task-${index}`}
            style={{textDecoration: completedTasks[index] ? 'line-through' : 'none'}}
            >
              {task}
              </label>
              <br/>
          </div>
              
        ))
      )
      }
    </div>
  )
}

export default ListDet;