import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService,
              private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.auth.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request).pipe(tap((event) => {
      if (event instanceof HttpResponse) {
        const status = event.status;
        if (status === 401) {
          this.auth.removeToken();
          this.router.navigate(['/login']);
          return;
        }
        const token = event.headers.get('update-token');
        if (token) {
          this.auth.setToken(token);
        }
      }
    }));
  }
}
