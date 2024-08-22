import React from "react";

export default function TodoItem({ task, removeTask, toggleTaskComplete }) {
  const handleRemove = () => {
    const isConfirmed = window.confirm(`¿Estás seguro de que quieres eliminar la tarea "${task.title}"?`);
    if (isConfirmed) {
      removeTask(task);
    }
  };

  const handleToggleComplete = () => {
    toggleTaskComplete(task);
  };

  return (
    <div className="todo-item">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p><strong>Responsable:</strong> {task.owner}</p>
      <p><strong>Completada:</strong> {task.isDone ? "Sí" : "No"}</p>
      <button onClick={handleToggleComplete}>
        {task.isDone ? "Desmarcar" : "Marcar como completada"}
      </button>
      <button onClick={handleRemove}>Eliminar</button>
    </div>
  );
}
