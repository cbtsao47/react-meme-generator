import React from "react";

function TodoItem(props) {
  const { id, text, completed } = props.data;
  return (
    <div className="todo-item">
      <input type="checkbox" name="" id="id" checked={completed} />
      <label htmlFor="id">{text}</label>
    </div>
  );
}
export default TodoItem;
