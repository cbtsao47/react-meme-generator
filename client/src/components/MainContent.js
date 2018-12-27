import React from "react";
import TodoItem from "./TodoItem";

function MainContent() {
  return (
    <main className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </main>
  );
}
export default MainContent;
