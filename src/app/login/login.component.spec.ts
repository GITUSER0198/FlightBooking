import { async, ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { routes } from '../app-routing.module';
import { LoginComponent } from './login.component';
import { Location } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Type } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  // let mockFormBuilderService;
  // let mockAuthService;
  // let mockRouterService;
  // let mockNotificationService;
  // let mockTranslateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, RouterTestingModule,
        ToastrModule.forRoot(), TranslateModule.forRoot(), BrowserAnimationsModule,HttpClientTestingModule]

    })
      .compileComponents();

      // mockFormBuilderService=jasmine.createSpyObj(['']);
      // mockAuthService=jasmine.createSpyObj(['']);
      // mockRouterService=jasmine.createSpyObj(['']);
      // mockNotificationService=jasmine.createSpyObj(['']);
      // mockTranslateService=jasmine.createSpyObj(['']);

      // component=new LoginComponent(mockFormBuilderService,mockAuthService,
      //   mockRouterService,mockNotificationService,mockTranslateService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call createLoginForm', () => {
    component.ngOnInit();
    expect(component.createLoginForm()).toBeTruthy();
  });
  it('check input form controls', () => {
    expect(component.loginFormControl).toBeTruthy();
  });



});
