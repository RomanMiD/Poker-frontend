import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegistration } from '../common/interfaces/user-registration';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private basePath = `${environment.apiUrl}/users`;

  constructor(private Http: HttpClient) {
  }

  public registrate(userData: UserRegistration): Observable<UserRegistration> {
    const request = userData;
    return this.Http.post<UserRegistration>(`${this.basePath}/registration`, request);
  }
}
