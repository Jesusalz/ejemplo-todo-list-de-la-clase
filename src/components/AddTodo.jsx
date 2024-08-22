import React, { useState } from "react";

export default function AddTodo({ addTask, owners }) {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    owner: owners.length > 0 ? owners[0] : "", 
    isDone: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (newTask.title.trim() !== "" && newTask.description.trim() !== "") {
      addTask(newTask);
      setNewTask({ title: "", description: "", owner: owners.length > 0 ? owners[0] : "", isDone: false });
    }
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        value={newTask.title}
        onChange={handleChange}
        placeholder="Título de la tarea"
      />
      <input
        type="text"
        name="description"
        value={newTask.description}
        onChange={handleChange}
        placeholder="Descripción"
      />
      <select name="owner" value={newTask.owner} onChange={handleChange}>
        {owners.map((owner, index) => (
          <option key={index} value={owner}>
            {owner}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit}>Agregar</button>
    </div>
  );
}
