import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private userService: UserService
  ) {

  }


  authenticate(username, password):any {
      const user =  this.userService?.users?.find(user => user.username === username && user.password === password);
      if (user) {
         sessionStorage.setItem('username', username);
         sessionStorage.setItem('profession',user.profession);
         return user;
       } else {
         return false;
       }


  }

  isUserLoggedIn(): boolean {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }


  logOut(): void {
    sessionStorage.removeItem('username');
  }
}
