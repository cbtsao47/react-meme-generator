import React from "react";
import TodoItem from "./TodoItem";
import data from "../data";
class MainContent extends React.Component {
  constructor() {
    super();
    this.state = { data };
  }
  render() {
    const todoComponents = data.map(item => (
      <TodoItem key={item.id} data={item} />
    ));

    return <main className="todo-list">{todoComponents}</main>;
  }
}
export default MainContent;
