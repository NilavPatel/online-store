import { InjectionToken } from "@angular/core";

export interface AuthService {
    isAuthenticated(): boolean;
    getUserDetails(): User | undefined;
    setUserDetails(userName: string, token: string): void;
    removeUser(): void;
}

export interface User {
    userName: string,
    token: String
}

export const AUTH_SERVICE_TOKEN = new InjectionToken<AuthService>('AuthService');
