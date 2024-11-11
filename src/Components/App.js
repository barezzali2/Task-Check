import TaskBox from "./TaskBox";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import ListDet from "./ListDet";
import { useState } from "react";

function App() {
  const [taskList, setTaskLists] = useState([]); // Manage an array of tasks
  const [task, setTask] = useState("");   // Single task input

  // Function to handle adding a new task
  const addTask = () => {
    if (task.length > 0) { // Ensure task is not empty
      setTaskLists([...taskList, task]);
      setTask(""); // Clear input field after adding
    }
  };

  return (
    <div className="to-do-list">
      <h1 className="mt-4 ml-4 font-semibold text-2xl">
        <a href="/">✔️Task Check</a>
      </h1>
      <TaskBox>
        <AddTask task={task} setTask={setTask} onHandleText={addTask}/>
      </TaskBox>

      <TaskList>
        <ListDet tasks={taskList} />
      </TaskList>
    </div>
  );
}

export default App;