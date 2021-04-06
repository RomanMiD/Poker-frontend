import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  LoginRequest,
  LoginResponse,
  RegistrationRequest,
  RegistrationResponse,
} from 'poker-common';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private basePath = `${environment.apiUrl}/users`;

  constructor(private Http: HttpClient) {
  }

  public registration(userData: RegistrationRequest): Observable<RegistrationResponse> {
    return this.Http.post<RegistrationResponse>(`${this.basePath}/registration`, userData);
  }

  public login(userData: LoginRequest): Observable<LoginResponse> {
    return this.Http.post<LoginResponse>(`${this.basePath}/entry`, userData);
  }
}
