import React from 'react';

const TaskItem = ({ task, deleteTask, toggleCompletion }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleCompletion(task.id)}
      />
      <span>{task.title}</span>
      <span className="priority">{task.priority}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
