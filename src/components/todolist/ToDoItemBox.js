import React from "react";
import TodoItem from "./ToDoItem";

function ToDoItemBox({ todos, onRemove, onToggle }) {
  return (
    <div className="ToDoItemBox">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default ToDoItemBox;
