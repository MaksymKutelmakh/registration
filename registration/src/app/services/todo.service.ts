import {EventEmitter, Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDoModel } from '../shared/models/todo.model';


@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(
    private http: HttpClient
  ) { }

  getToDoList(): Observable<ToDoModel[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
     .pipe(
        map((response: any[]) => {
          if (response.length) {
            return response.map(item => new ToDoModel().deserialize(item));
          }
        })
      );
  }

  updateList(list: ToDoModel[]) {
    return this.http.post('https://jsonplaceholder.typicode.com/todos/1с', list);
  }
}
