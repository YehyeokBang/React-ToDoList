import React from "react";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";
import cn from "classnames";
import "./ToDo.css";

function ToDoItem({ todo, onRemove, onToggle }) {
  const { id, text, checked } = todo;
  return (
    <div className="ToDoItem">
      <div
        className={cn("ToDoItem_checkbox", { checked })}
        onClick={() => onToggle(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="ToDoItem_text">{text}</div>
      </div>
      <div>
        <div className="ToDoItem_remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
