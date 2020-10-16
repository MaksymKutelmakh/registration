import {EventEmitter, Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDoModel } from '../shared/models/todo.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  createUsers(user: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/users', user);
  }
}
