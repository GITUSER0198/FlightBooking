import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { RegisterFormData } from '../types/RegisterFormData';
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private USER_BASE_URL = 'https://6242e274d126926d0c58f063.mockapi.io/api122121/users';
  users:RegisterFormData[]=[{name:'admin',email:'admin@gmail.com',mobile:'0000000000',password:'admin',profession:'Admin',username:'admin'},
                            {name:'student',email:'student@gmail.com',mobile:'0000000000',password:'student',profession:'Student',username:'student'}] ;
  constructor(
    private http: HttpClient,
    private tstr: ToastrService,
    private router: Router
  ) {
  }

  registerUser(registerFormData:RegisterFormData){
    const userData = {
      name: registerFormData.name,
      email: registerFormData.email,
      username: registerFormData.username,
      password: registerFormData.password,
      profession: registerFormData.profession,
      mobile:registerFormData.mobile
    };
    if (this.checkIfDuplicateUser(this.users,userData)){
      this.tstr.error('Provide unique username and email', 'User already exists.', {timeOut: 1000});
    }
    else{
      this.http.post(`${this.USER_BASE_URL}`, userData).subscribe(res => {
        this.tstr.success('', 'New user created', {timeOut: 1000});
        this.saveToFile(userData);
        this.router.navigate(['display']);

      },
      err => {
        this.tstr.error('', 'Registration failed', {timeOut: 1000});
        console.log(err);
      });
    }

  }
  checkIfDuplicateUser(users,userData){
   return users.find(x => x.username === userData.username || x.email === userData.email);
  }


  getUserDetails(){
    return this.http.get<RegisterFormData[]>(`${this.USER_BASE_URL}`).pipe(retry(3)).subscribe(res => {
      res.push({name:'admin',email:'admin@gmail.com',mobile:'0000000000',password:'admin',profession:'Admin',username:'admin'},
               {name:'student',email:'student@gmail.com',mobile:'0000000000',password:'student',profession:'Student',username:'student'});
      console.log(res);
       this.users = res;
      },
     err => {
       console.log(err);
       return err;
     });
  }

  saveToFile(userData) {
    const data =
      '\r Name: ' + userData.name + ' \r\n ' +
      'Email: ' + userData.email + ' \r\n ' +
      'Username: ' + userData.username + ' \r\n ' +
      'Mobile: ' + userData.mobile + ' \r\n ' +
      'Profession: ' + userData.profession;

    FileSaver.saveAs(new Blob([data], { type: 'text/plain;charset=utf-8' }), 'data.txt', { autoBom: false });
  }
}
