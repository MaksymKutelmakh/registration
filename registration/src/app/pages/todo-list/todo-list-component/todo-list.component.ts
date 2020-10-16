import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToDoService } from 'src/app/services/todo.service';
import { ToDoModel } from 'src/app/shared/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class ToDoListComponent implements OnInit, OnDestroy {

  toDoList: ToDoModel[];
  toDoTitle = new FormControl();
  updatedToDo: ToDoModel;

  complited = false;

  focusedRow: any;
  showEditor: boolean;

  constructor(
    private toDoService: ToDoService
  ) { }

  ngOnInit() {
    this.toDoService.getToDoList().subscribe((list: ToDoModel[]) => {
      this.toDoList = list;
    });
  }

  deleteToDo(toDo: ToDoModel) {
    this.toDoList.splice(this.toDoList.indexOf(toDo), 1);
  }

  createToDo() {
    if (!this.toDoTitle.value) {
      return;
    }
    const newToDo = new ToDoModel();
    newToDo.title = this.toDoTitle.value;
    newToDo.completed = false;
    newToDo.id = this.toDoList.length + 1;
    newToDo.userId = 0;

    this.toDoList.unshift(newToDo);

    this.toDoTitle.setValue(null);
  }

  updateToDo(toDo?: ToDoModel) {
    if (toDo) {
      this.showEditor = true;
      this.updatedToDo = toDo;
      this.toDoTitle.setValue(this.updatedToDo.title);
      this.complited = this.updatedToDo.completed;
    } else {
      this.showEditor = false;
      const toDo = this.toDoList.find(td => td.id === this.updatedToDo.id);
      toDo.title = this.toDoTitle.value;
      toDo.completed = this.complited;
    }
  }

  ngOnDestroy() {
    this.toDoService.updateList(this.toDoList);
  }

}
