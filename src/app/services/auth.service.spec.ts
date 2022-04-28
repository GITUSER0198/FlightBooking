import { HttpClientTestingModule } from '@angular/common/http/testing';
import { i18nMetaToDocStmt } from '@angular/compiler/src/render3/view/i18n/meta';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, ToastrModule.forRoot(),RouterTestingModule]
    });
    service = TestBed.inject(AuthService);
    let store = {};
    const mockSessionStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
    // mocks sessionStorage sessionStorage.getItem calls mockSessionStorage.getItem
    spyOn(sessionStorage, 'getItem')
      .and.callFake(mockSessionStorage.getItem);
    spyOn(sessionStorage, 'setItem')
      .and.callFake(mockSessionStorage.setItem);
    spyOn(sessionStorage, 'removeItem')
      .and.callFake(mockSessionStorage.removeItem);
    spyOn(sessionStorage, 'clear')
      .and.callFake(mockSessionStorage.clear);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('check authenticate for admin', () => {
    expect(service.authenticate('admin', 'admin')).toBeTruthy();
  });
  it('check authenticate for student', () => {
    expect(service.authenticate('student', 'student')).toBeTruthy();
  });

  it('check if user is logged in when logged in', () => {
    sessionStorage.setItem('username', 'admin');
    expect(service.isUserLoggedIn()).toBeTrue();
  });

  it('check if user is logged in when not logged in', () => {
    sessionStorage.removeItem('username');
    expect(service.isUserLoggedIn()).toBeFalse();
  });

  it('check logout', () => {
    sessionStorage.setItem('username', 'asd');
    service.logOut();
    expect(service.isUserLoggedIn()).toBeFalse();
  });



});
