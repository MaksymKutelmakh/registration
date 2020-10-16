import { NgModule } from '@angular/core';
import { RegistrationModule } from './registration/registration.module';
import { ToDoListModule } from './todo-list/todo-list.module';


@NgModule({
  imports: [
    ToDoListModule,
    RegistrationModule
  ],
  declarations: [
  ],
  exports: [
    ToDoListModule,
    RegistrationModule
  ],
  providers: [
  ]
})
export class PagesModule { }
