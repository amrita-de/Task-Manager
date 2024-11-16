import React, { useState, useEffect } from 'react';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('default');

  // Load tasks from local storage on initial render
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Save tasks to local storage whenever tasks state changes
  useEffect(() => {
    if (tasks.length > 0) { 
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (title, priority) => {
    setTasks([...tasks, { id: Date.now(), title, priority, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedTasks = [...tasks]
    .filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === 'priority') {
        return a.priority.localeCompare(b.priority);
      } else if (sortOption === 'completion') {
        return a.completed - b.completed;
      } else if (sortOption === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <div className="controls">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <select onChange={handleSortChange}>
          <option value="default">Default</option>
          <option value="priority">Sort by Priority</option>
          <option value="completion">Sort by Completion</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>
      <TaskList tasks={sortedTasks} deleteTask={deleteTask} toggleCompletion={toggleCompletion} />
    </div>
  );
};

export default App;

