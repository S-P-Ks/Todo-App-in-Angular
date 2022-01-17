import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  TodoText = 'Shubham';
  Todos: any[] = [];
  constructor() {}

  print() {
    if (this.TodoText != '') {
      this.Todos.push({ text: this.TodoText, selected: false });
      this.TodoText = '';
    }
  }

  select(i: number) {
    this.Todos[i].selected = this.Todos[i].selected == false ? true : false;
  }

  Remove(i: number) {
    console.log(i);
    this.Todos.splice(i, 1);
  }

  ngOnInit(): void {}
}
