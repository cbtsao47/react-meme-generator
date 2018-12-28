import React from "react";
import TodoItem from "./TodoItem";
import data from "../data";
class MainContent extends React.Component {
  constructor() {
    super();
    this.state = { data };
  }
  handleChange = id => {
    console.log(this.state.data);
    this.setState(
      prevState => {
        let todos = prevState.data.map(todo => {
          if (todo.id === id) {
            let copy = { ...todo };
            copy.completed = !copy.completed;
            return copy;
          } else {
            return todo;
          }
        });
        return { data: todos };
      }
      // () => console.log(this.state.data) ======> logs the new state
    );
  };

  render() {
    const todoComponents = this.state.data.map(item => (
      <TodoItem key={item.id} data={item} handleChange={this.handleChange} />
    ));

    return (
      <main className="todo-list">
        {todoComponents}
        <div className="todo-list__btn-wrapper">
          <button className="todo-list__btn">Add New Task</button>
          <button className="todo-list__btn">Delete Completed Tasks</button>
        </div>
      </main>
    );
  }
}
export default MainContent;
