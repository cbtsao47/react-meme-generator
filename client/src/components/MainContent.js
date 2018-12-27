import React from "react";
import TodoItem from "./TodoItem";
import data from "../data";
class MainContent extends React.Component {
  constructor() {
    super();
    this.state = { data };
  }
  handleChange = id => {
    this.setState(prevState => {
      const todos = prevState.data.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          return todo;
        } else {
          return todo;
        }
      });
      return { data: todos };
    });
  };

  render() {
    const todoComponents = this.state.data.map(item => (
      <TodoItem key={item.id} data={item} handleChange={this.handleChange} />
    ));

    return <main className="todo-list">{todoComponents}</main>;
  }
}
export default MainContent;
