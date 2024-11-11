import React from 'react';

function ListDet({ tasks }) {


  function handleStrike(e) {
    if(e.target.style.textDecoration) {
      e.target.style.removeProperty("text-decoration");
    } else {
      e.target.style.setProperty("text-decoration", "line-through");
    }
  }

  
  return (
    <div className='list-details'>
      <>
      <h2>To Do List</h2>
      {tasks.length === 0 ? (
        <p>Add you tasks here.</p>
      ) : (
        tasks.map((task, index) => (
          <div key={index}>
            <input type="checkbox" id={`task-${index}`}/>  
            <label className='tasksL pl-2' for={`task-${index}`} onClick={handleStrike}>{task}</label><br/>
          </div>
              
        ))
      )
      }


  </>
    </div>
  )
}

export default ListDet;