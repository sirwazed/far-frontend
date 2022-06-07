import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterapiService } from 'src/app/services/registerapi.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router,
    private login: RegisterapiService
  ) {}

  ngOnInit() {}

  onLogin(loginForm: NgForm) {
    //console.log(loginForm.value);
    this.login.login(loginForm.value).subscribe((res)=>{
      if (res) {
        localStorage.setItem('token', res[0].userName);
        localStorage.setItem('role',res[0].role);
        console.log(`respnse = `);
        console.log(res[0]);
        this.alertify.success('Login Successful');
        this.router.navigate(['/']);
      } else {
        this.alertify.error('User Id or Password is Wrong');
      }
    })
  }
}
