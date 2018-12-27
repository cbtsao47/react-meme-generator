import React from "react";

function TodoItem(props) {
  console.log(props.prototype);
  return (
    <div className="todo-item">
      <input type="checkbox" name="" id="todoItem" />
      <label htmlFor="todoItem">Todo item</label>
    </div>
  );
}
export default TodoItem;
