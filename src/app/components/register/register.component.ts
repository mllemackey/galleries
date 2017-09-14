import { Component } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/services/auth.service';
import {Author} from '../../shared/models/author.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

    private newuser: Author = new Author();
    private terms: boolean = false;

    constructor(private authService: AuthService,
                private router: Router) {
    }

    public register(author: Author)
    {
        console.log(author);
        this.authService.registration(author) .subscribe();
    }

}
