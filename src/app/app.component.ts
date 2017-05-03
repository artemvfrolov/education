import { Component } from '@angular/core';
import { TodoStore, Todo } from './service/store.service';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class TodoApp {
  todoStore: TodoStore;
  newTodoText = '';
  todosClone: Array<Todo>;

  constructor(todoStore: TodoStore) {
    this.todoStore = todoStore;
    this.todosClone = todoStore.todos;
  }

  removeCompleted() {
    this.todoStore.removeCompleted();
  }

  toggleCompletion(todo: Todo) {
    this.todoStore.toggleCompletion(todo);
  }

  remove(todo: Todo){
    this.todoStore.remove(todo);
  }

  addTodo(form) {
    event.preventDefault();

    this.newTodoText = form.value.todo;

    if (this.newTodoText.trim().length) {
      this.todoStore.add(this.newTodoText);
      this.newTodoText = '';
      form.reset();
    }
  }

  filter(type: string) {
    event.preventDefault();

    let arrAll = this.todoStore.todos;
    let arrActive = [];
    let arrCompleted = [];

    arrAll.forEach(function (item) {
      if (item.completed){
        arrActive.push(item);
      }else{
        arrCompleted.push(item);
      }
    });

    switch (type){
      case  'all':
        this.todosClone = arrAll;
        break;

      case  'active':
        this.todosClone = arrCompleted;
        break;

      case  'completed':
        this.todosClone = arrActive;
        break;
    }
  }
}
