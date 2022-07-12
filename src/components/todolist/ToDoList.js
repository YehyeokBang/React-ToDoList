import React, { useCallback, useRef, useState } from "react";
import ToDoItemBox from "./ToDoItemBox.js";
import ToDoInsert from "./ToDoInsert.js";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(1);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );
  return (
    <div className="ToDoList">
      <ToDoItemBox todos={todos} onRemove={onRemove} onToggle={onToggle} />
      <ToDoInsert onInsert={onInsert} />
    </div>
  );
}

export default ToDoList;
