import React, { useCallback, useState } from "react";

function ToDoInsert({ onInsert }) {
  const [value, setValue] = useState("");

  const onChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (value === "") {
        return;
      }

      onInsert(value);
      setValue("");
    },
    [onInsert, value]
  );
  return (
    <form className="ToDoInsert" onSubmit={onSubmit}>
      <input
        className="ToDoInsert_input"
        type="text"
        placeholder="Write your to do"
        value={value}
        onChange={onChange}
      ></input>
      <button className="ToDoInsert_button">Add</button>
    </form>
  );
}

export default ToDoInsert;
