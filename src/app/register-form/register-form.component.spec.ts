import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { LoginComponent } from '../login/login.component';

import { RegisterFormComponent } from './register-form.component';

describe('InputFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormComponent ],
      imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule, ToastrModule.forRoot() , TranslateModule.forRoot()],

    })
    .compileComponents();
    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));



  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create register form', () => {
    expect(component.createRegisterForm()).toBeTruthy();
  });
  it('check register form controls', () => {
    expect(component.registerFormControl).toBeTruthy();
  });

  // it('check trnaslations are loading',()=>{
  //   fixture.detectChanges();
  //   console.log(fixture.nativeElement.querySelectorAll('div.form-group>label'))
  //   // fixture.nativeElement.querySelector('label')
  //   expect(true).toBeTruthy();
  // })




});
