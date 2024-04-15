import React, { Component } from "react";
import { observer } from "mobx-react";
import { Todo, TodoList } from "./store";

interface TodoListViewProps {
  todoList: TodoList;
}

interface TodoViewProps {
  todo: Todo;
}

@observer
class TodoListView extends Component<TodoListViewProps> {
  onAdd = (e: any) => {
    if (e.keyCode !== 13) return;
    let todo = new Todo();
    todo.title = e.target.value;
    this.props.todoList.add(todo);
  };
  render() {
    const {
      todoList: { todos, unfinishedTodoCount },
    } = this.props;
    return (
      <div>
        Add Todo: <input type="text" onKeyUp={this.onAdd} />
        <ul>
          {todos.map((todo: Todo) => (
            <TodoView todo={todo} key={todo.id} />
          ))}
        </ul>
        Task Left: {unfinishedTodoCount}
      </div>
    );
  }
}

const TodoView = observer(({ todo }: TodoViewProps) => (
  <li>
    <input type="checkbox" onClick={() => (todo.finished = !todo.finished)} />
    {todo.title}
  </li>
));

export default TodoListView;
