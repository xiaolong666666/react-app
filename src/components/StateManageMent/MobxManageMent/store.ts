import { action, computed, makeAutoObservable, observable } from "mobx";

export class Todo {
  id = Math.random();
  @observable title = "";
  @observable finished = false;
}

export class TodoList {
  constructor() {
    makeAutoObservable(this); //! 类被监听
  }
  @observable todos: Todo[] = [];
  @action.bound
  add(todo: Todo) {
    this.todos.push(todo);
  }
  @computed get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.finished).length;
  }
}
