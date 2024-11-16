
import React from 'react';
import './App.css';

const TaskList = ({ tasks, deleteTask, toggleCompletion }) => (
  <ul className="task-list">
    {tasks.map((task) => (
      <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleCompletion(task.id)}
          className="task-checkbox"
        />
        <span className="task-text" onClick={() => toggleCompletion(task.id)}>
          {task.title} ({task.priority})
        </span>
        <button onClick={() => deleteTask(task.id)} className="task-delete-button">Delete</button>
      </li>
    ))}
  </ul>
);

export default TaskList;

