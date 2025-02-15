import React, { useState } from 'react';

function ListDet({ tasks }) {
  const [completedTasks, setCompletedTasks] = useState(Array(tasks.length).fill(false));

  function handleToggle(index) {
    const updatedTasks = [...completedTasks];
    updatedTasks[index] = !updatedTasks[index];
    setCompletedTasks(updatedTasks);
  }

  // Combine tasks with their completion status
  const taskStatus = tasks.map((task, index) => ({
    task,
    completed: completedTasks[index],
    index
  }));


  const sortedTasks = taskStatus.sort((a, b) => {
    if(a.completed === b.completed) return 0;
    return a.completed ? 1 : -1;
  });


  return (
    <div className='list-details'>
      <h2>To Do List</h2>
      {tasks.length === 0 ? (
        <p>Add your tasks here.</p>
      ) : (
        sortedTasks.map(({ task, completed, index}) => (
          <div key={index}>
            <input
              type="checkbox"
              id={`task-${index}`}
              className='checkboxIn'
              checked={completed}
              onChange={() => handleToggle(index)}
            />
            <label
              className='tasksL pl-1'
              htmlFor={`task-${index}`}
              style={{ textDecoration: completed ? 'line-through' : 'none' }}
            >
              {task}
            </label>
            <br />
          </div>
        ))
      )}
    </div>
  );
}


export default ListDet;