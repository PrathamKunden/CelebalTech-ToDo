import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem.jsx";
import "./App.css";

const TodoForm = () => {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("date");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();

    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks([newTask, ...tasks]);
    setInput("");
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sort === "name") return a.text.localeCompare(b.text);
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <div className="app">
  
      <img src="../public/todoIcon.svg" alt="" className="logo" />
      <form onSubmit={addTask} className="inputContaminer">
        <input
          type="text"
          placeholder="Enter task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
          className="inputBox"
        />
        <button type="submit" className="submitBtn">Add</button>
      </form>

      <div className="controls">
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="filters">
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)} className="filters">
          <option value="date">Newest</option>
          <option value="name">Name</option>
        </select>
      </div>

      <ul className="task-list">
        {sortedTasks.length > 0 ? (
          sortedTasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              onToggle={toggleComplete}
              onDelete={deleteTask}
            />
          ))
        ) : (
          <p className="empty">No tasks available.</p>
        )}
      </ul>
    </div>
  );
};

export default TodoForm;
