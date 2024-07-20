import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ListUser, User } from '../../model/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:any;
  registerForm:any;
  activeForm: 'login' | 'register' = 'login';

  constructor( private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar){}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  toggleForm(form: 'login' | 'register') {
    this.activeForm = form;
  }

  login() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      console.log(loginData)
      const user = ListUser.find(user => user.username === loginData.username &&
                                         user.email === loginData.email &&
                                         user.password === loginData.password
      )
      if(user) {
        this.router.navigate(['/budget-planner/dashboard']);
        alert('Login Successful!')

    } else {
      this.snackBar.open('Invalid User', 'Close', { duration: 3000 });
    }
  } else {
    this.snackBar.open('Invalid email or password!', 'Close', { duration: 3000 });
  }
  }
  register() {
    if (this.registerForm.valid) {
      const registerData = this.registerForm.value;
      const userExists = ListUser.some(u => u.email === registerData.email);

      if (userExists) {
        this.snackBar.open('Email already exists!', 'Close', { duration: 3000 });
      } else {
        ListUser.push({ username:registerData.username, email: registerData.email, password: registerData.password });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        this.router.navigate(['/budget-planner/login']);
      }
    } else {
      this.snackBar.open('Please fill in all fields correctly!', 'Close', { duration: 3000 });
    }
  }

}
