import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';
import { ValidationsService } from '../services/validations.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private customValidator: ValidationsService,
    private dataServce: DataService,
    private tstr: ToastrService,
    private userService: UserService
  ) { }
  professions: string[] = [
    'Admin',
    'Student'
  ];

  ngOnInit(): void {
    this.registerForm = this.createRegisterForm();
    this.userService.getUserDetails();
  }
  get registerFormControl() {
    return this.registerForm.controls;
  }

  saveToService() {
    this.dataServce.registerForm = this.registerForm;
  }

  createRegisterForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
      profession: ['', [Validators.required]]
    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.dataServce.setFormData(this.registerForm.value);

      this.userService.registerUser(this.registerForm.value);
    }

  }

}
