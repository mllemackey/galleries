import { Injectable } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Author } from '../models/author.model';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  public isAuthenticated: boolean;
  public loggedInUser = {};

  constructor(private http: HttpClient, private router: Router) {
    this.isAuthenticated = !!window.localStorage.getItem('loginToken');
    this.loggedInUser = !!window.localStorage.getItem('user');
  }

  login(email: string, password: string)
  {
    return new Observable((o: Observer<any>) => {
      this.http.post('http://localhost:8000/api/login', {
        'email': email,
        'password': password
      })
        .subscribe(
          (data: {token: string}) => {
            window.localStorage.setItem('loginToken', data.token);
            this.isAuthenticated = true;
            this.router.navigateByUrl('/');

            o.next(data.token);
            return o.complete();
          },
          (err) => {
            return o.error(err);
          }
        );
    });
  }
  registration(author: Author)
  {
    console.log(author);
    return new Observable((o: Observer<any>) => {
      this.http.post('http://localhost:8000/api/register', {
          'first_name': author.first_name,
          'last_name': author.last_name,
          'email': author.email,
          'password': author.password
      }).subscribe(
          (a: Author) => {
              this.login(author.email, author.password)
                  .subscribe();
              o.next(a);
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
