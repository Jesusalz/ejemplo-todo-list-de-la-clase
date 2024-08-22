import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { tareasObj } from "./mock/tasks"; // Puedes usar esto como una tarea por defecto
import AddTodo from "./components/AddTodo";

function App() {
  // Cargar las tareas desde localStorage o usar las tareas predeterminadas
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : tareasObj;
  });

  const uniqueOwners = [...new Set(tasks.map(task => task.owner))];

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Guardar en localStorage
  };

  const removeTask = (taskToRemove) => {
    const isConfirmed = window.confirm(`¿Estás seguro de que quieres eliminar la tarea "${taskToRemove.title}"?`);
    if (isConfirmed) {
      const updatedTasks = tasks.filter(task => task !== taskToRemove);
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Actualizar localStorage
    }
  };

  const toggleTaskComplete = (taskToToggle) => {
    const updatedTasks = tasks.map((task) =>
      task === taskToToggle ? { ...task, isDone: !task.isDone } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Guardar en localStorage
  };

  return (
    <main className="app">
      <AddTodo addTask={addTask} owners={uniqueOwners} />
      <TodoList tasks={tasks} removeTask={removeTask} toggleTaskComplete={toggleTaskComplete} />
    </main>
  );
}

export default App;
