import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // direccion al backend
  private apiUrl = 'http://localhost:8080/api/auth';

  // cosntructor
  constructor(
    private http: HttpClient
  ) {}

  // metodo para hacer login
  login(credentials: any) {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap(res => {
          // guardar token
          localStorage.setItem('token', res.token);
        })
      );
  }

  // metodo para register
  register(data: any) {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  // elminar token
  logout() {
    // elimina el token de la memoria del cliente
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
