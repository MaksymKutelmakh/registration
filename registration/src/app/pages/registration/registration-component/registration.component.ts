import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
        name: new FormControl(''),
        username: new FormControl(''),
        email: new FormControl(null, [Validators.required, Validators.email]),
        phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{9}')]),
        address: new FormGroup({
          street: new FormControl(''),
          suite: new FormControl(''),
          city: new FormControl(''),
          zipcode: new FormControl('')
        })
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.usersService.createUsers(this.registerForm.value);

    this.router.navigate(['todo']).then();
  }

}
