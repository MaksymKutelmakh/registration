import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ToDoService } from './todo.service';
import { UsersService } from './users.service';

@NgModule({
    imports: [HttpClientModule],
    declarations: [],
    providers: [
        ToDoService,
        UsersService
    ]
})
export class HttpModule {

}

