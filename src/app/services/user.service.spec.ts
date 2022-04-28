import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { RegisterFormData } from '../types/RegisterFormData';

import { UserService } from './user.service';

describe('UserService', () => {
  let userService:UserService;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, ToastrModule.forRoot(),RouterTestingModule]
    });
    userService = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });


  it('should call get with correct URL', () => {
    userService.getUserDetails();
    const req = httpTestingController.expectOne('https://6242e274d126926d0c58f063.mockapi.io/api122121/users');
    expect(req.request.method).toBe('GET');
    httpTestingController.verify();
  });

  it('should call post with correct URL', () => {
    const userData:RegisterFormData = {
      name: 'dummyName',
      email: 'dummyEmail',
      username: 'dummyUserName',
      password: 'dummyPassword',
      profession: 'dummyProfession',
      mobile:'0000000000'
    };
    userService.registerUser(userData);
    const req = httpTestingController.expectOne('https://6242e274d126926d0c58f063.mockapi.io/api122121/users');
    expect(req.request.method).toBe('POST');
    httpTestingController.verify();
  });

  it('should check duplicate user and return true if email or username is same',()=>{
    let users=[{ name:'dummyName',
      email: 'dummyEmail',
      username: 'dummyUserName',
      password: 'dummyPassword',
      profession: 'dummyProfession'
      }]
    let userToCheck={name:'dummyName',
    email: 'dummyEmail',
    username: 'dummyUserName',
    password: 'dummyPassword',
    profession: 'dummyProfession'};
      expect(userService.checkIfDuplicateUser(users,userToCheck)).toBeTruthy();

    })



});
