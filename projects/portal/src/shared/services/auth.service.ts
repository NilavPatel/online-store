import { Injectable } from '@angular/core';
import { AuthService, User } from 'mod-fed-helper';

@Injectable({
    providedIn: 'root',
})
export class HostAuthService implements AuthService {

    isAuthenticated(): boolean {
        var user = this.getUserDetails();
        return !!user;
    }

    getUserDetails(): User | undefined {
        var data = localStorage.getItem('user') || '';
        return JSON.parse(data) as User;
    }

    setUserDetails(userName: string, token: string): void {
        var user = { userName: userName, token: token };
        localStorage.setItem('user', JSON.stringify(user));
    }

    removeUser(): void {
        localStorage.removeItem('user');
    }
}
