import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public setToken(value: string): void {
    localStorage.setItem('token', value);
  }
  public removeToken(): void {
    localStorage.removeItem('token')
  }
}
