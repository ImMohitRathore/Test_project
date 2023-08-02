import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/ApiServices';
import { AuthService } from '../services/AuthService';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {

    const isLoggedIn = await this.authService.isLoggedIn();

    if (isLoggedIn) {
      return true; // User is logged in, allow access
    } else {
      this.router.navigate(['/login']); // User is not logged in, redirect to login page
      return false;
    }
  }
}