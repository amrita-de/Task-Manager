
import React, { useState } from 'react';
import './App.css';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addTask(title, priority);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="task-input"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="task-select"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit" className="add-task-button">Add Task</button>
    </form>
  );
};

export default TaskForm;
