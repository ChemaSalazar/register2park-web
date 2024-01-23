import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor() { }

  login(username: string | undefined, password: string | undefined): boolean {
    // Implement your authentication logic here
    // For now, let's assume the user is authenticated
    this.isAuthenticated = true;
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
    // Clear stored user data here (if any)
    // For example, if you're using localStorage:
    localStorage.removeItem('user');
    // Or, if using cookies, clear the cookie
  }

  get isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}

