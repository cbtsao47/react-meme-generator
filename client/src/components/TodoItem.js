import React from "react";

function TodoItem(props) {
  const { id, text, completed } = props.data;
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        name=""
        checked={completed}
        onChange={() => props.handleChange(id)}
      />
      <label htmlFor="id">{text}</label>
    </div>
  );
}
export default TodoItem;
