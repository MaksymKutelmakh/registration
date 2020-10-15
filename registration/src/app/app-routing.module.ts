import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration-component/registration.component';
import { UsersComponent } from './pages/users/users-component/users.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/registration',
    pathMatch: 'full'
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
