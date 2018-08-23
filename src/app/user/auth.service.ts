import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from './user.model';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthService {
  currentUser: IUser;

  constructor(private http: HttpClient) {}

  loginUser(userName: string, password: string) {
    const loginInfo = { username: userName, password: password };
    const option = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .post('/api/login', loginInfo, option)
      .pipe(
        tap(data => {
          this.currentUser = <IUser>data['user'];
        })
      )
      .pipe(
        catchError(err => {
          return of(false);
        })
      );
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
    this.http
      .get('/api/currentIdentity')
      .pipe(
        tap(data => {
          if (data instanceof Object) {
            this.currentUser = <IUser>data;
          }
        })
      )
      .subscribe();
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    const option = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, option);
  }

  logout() {
    this.currentUser = undefined;
    const option = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post('/api/logout', {}, option);
  }
}
