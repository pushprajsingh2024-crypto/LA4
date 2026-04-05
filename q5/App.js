// Import React and useState hook
import React, { useState } from "react";

// Main App Component
function App() {

  // State for current input task
  const [task, setTask] = useState("");

  // State for storing all tasks
  const [tasks, setTasks] = useState([]);

  // Handle input change
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  // Function to add task to list
  const addTask = () => {

    // Prevent adding empty task
    if (task.trim() === "") return;

    // Add new task to existing list
    setTasks([...tasks, task]);

    // Clear input field
    setTask("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      {/* Header Section */}
      <h3>Name: Pushpraj</h3>
      <p>Reg No: 24BCE0044</p>

      {/* Title */}
      <h2>Todo List</h2>

      {/* Input field */}
      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Enter a task"
      />

      {/* Add button */}
      <button onClick={addTask}>Add</button>

      {/* Display task list */}
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li> // Each task item
        ))}
      </ul>

    </div>
  );
}

// Export App component
export default App;
