import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ tasks, removeTask }) {
  return (
    <div className="todo-list-container">
      <strong>Lista de tareas</strong>
      <div className="todolist">
        {tasks.map((task, index) => (
          <TodoItem
            key={task.title + index}
            task={task}
            removeTask={removeTask}
          />
        ))}
      </div>
    </div>
  );
}