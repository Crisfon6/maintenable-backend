import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent  {
  hide = true;
  isLoggedIn: boolean = true;
  rememberme: boolean = false;

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    
  if (localStorage.getItem('username')) {
    this.loginForm.setValue({
      username:localStorage.getItem('username'),
      password: ''
    });
  }
  
  }

  

  OnSubmit() {
    Swal.fire({
      allowOutsideClick: false,
      text: 'Espere por favor',
      icon: 'info',
      confirmButtonText: 'Cool',
    });
    Swal.showLoading();
    this.authService.login(this.loginForm.value).subscribe(
      (data) => {
        
        Swal.close();
        if (this.rememberme) {
          
          localStorage.setItem('username',this.loginForm.value.username);
     
        }
        this.authService.isAdmin().subscribe(data => {

        },err => {
         
        })
        this.router.navigateByUrl('/accidentes');
      },
      (err) => {
      
        Swal.fire('Oops...', err.error.msg, 'error');
      }
    );
  }
}
