import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    if (!this.authService.isAuthenticated) {
      this.router.navigate(['/login']);
    }


    return true;
  }
}
