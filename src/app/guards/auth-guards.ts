import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Auth } from '../services/auth/auth';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(Auth);
  const router = inject(Router);
  if (authService.isLoggedIn()) {
    return true;
  }
  alert("You must be logged in to access this page.");
  router.navigate(['/login']);
  return false;
};