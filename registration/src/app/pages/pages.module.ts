import { NgModule } from '@angular/core';
import { RegistrationModule } from './registration/registration.module';
import { UsersModule } from './users/users.module';


@NgModule({
  imports: [
    UsersModule,
    RegistrationModule
  ],
  declarations: [
  ],
  exports: [
    UsersModule,
    RegistrationModule
  ],
  providers: [
  ]
})
export class PagesModule { }
