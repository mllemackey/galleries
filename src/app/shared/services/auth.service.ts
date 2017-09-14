import { Injectable } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {

  public isAuthenticated: boolean;

  constructor(private http: HttpClient) {
    this.isAuthenticated = !!window.localStorage.getItem('loginToken');
  }

  login(email: string, password: string)
  {
    console.log('authlogin');
    return new Observable((o: Observer<any>) => {
      this.http.post('http://localhost:8000/api/login', {
        'email': email,
        'password': password
      })
        .subscribe(
          (data: {token: string}) => {
            window.localStorage.setItem('loginToken', data.token);

            o.next(data.token);
            return o.complete();
          },
          (err) => {
            return o.error(err);
          }
        );
    });
  }

  public getRequestHeaders() {
    return new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('loginToken'));
  }

  public logout()
  {
    window.localStorage.removeItem('loginToken');
    this.isAuthenticated = false;
  }


}
