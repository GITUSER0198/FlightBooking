import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';
import { RegisterFormData } from '../types/RegisterFormData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private notification: ToastrService,
    private translate: TranslateService,
    private userService: UserService
      ) {
    const browserLang = translate.getDefaultLang() || 'en';
    translate.use(browserLang.match(/en|de/) ? browserLang : 'en');

  }


  ngOnInit(): void {
    this.loginForm = this.createLoginForm();
    this.userService.getUserDetails();
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  createLoginForm(): FormGroup {
    return this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  login(username, password) {
    let user=this.auth.authenticate(username, password);
    if (user) {
      this.notification.success('', 'Login success', { timeOut: 1000 });
      if (user.profession==='Admin') {
        this.router.navigate(['dashboard']);
      }
      else {
        this.router.navigate(['dashboard-student']);
      }
    }
    else {
      this.notification.error('', 'Login failed', { timeOut: 1000 });
    }

  }

  onSubmit() {
    this.login(this.loginForm.value.username, this.loginForm.value.password);
  }

}
