import { Injectable, Inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AUTH_SERVICE_TOKEN, AuthService } from 'mod-fed-helper';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {

    constructor(
        @Inject(AUTH_SERVICE_TOKEN) private authService: AuthService,
        private router: Router
    ) { }

    canActivate(): boolean | Observable<boolean> {
        if (this.authService.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
