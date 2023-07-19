import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login-model';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login_form!: FormGroup;
  loginModel: LoginModel = {userID: '', password: ''};
  passwordType: string = 'password';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['home']);
  }
}
