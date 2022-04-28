import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../login/login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule,ToastrModule.forRoot()]
    });
    guard = TestBed.inject(AuthGuard);
  });

  // it('check login is false',()=>{
  //   guard.canActivate()
  // })
  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
