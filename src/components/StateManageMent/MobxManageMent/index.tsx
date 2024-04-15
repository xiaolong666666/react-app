import React, { Component } from "react";
import { TodoList } from "./store";
import TodoListView from "./TodoListView";

const todoList = new TodoList();

class Index extends Component {
  render() {
    return (
      <div>
        <TodoListView todoList={todoList} />
      </div>
    );
  }
}

export default Index;
