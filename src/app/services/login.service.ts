import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  LoginRequest,
  LoginResponse,
  RegistrationRequest,
  RegistrationResponse,
  WhoAmIResponse
} from 'poker-common';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private basePath = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {
  }

  public registration(userData: RegistrationRequest): Observable<RegistrationResponse> {
    return this.http.post<RegistrationResponse>(`${this.basePath}/registration`, userData);
  }

  public login(userData: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.basePath}/login`, userData);
  }

  /**
   * Метод возвращает информацию об авторизованном пользователе
   */
  public whoAmI(): Observable<WhoAmIResponse> {
    return this.http.post<WhoAmIResponse>(`${this.basePath}/whoAmI`, {});
  }
}
