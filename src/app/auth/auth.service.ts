import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  djangourl = 'http://127.0.0.1:8000/token/';
  private token: string | null = null;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const requestBody = {
      username,
      password
    }

    return this.http.post(this.djangourl, requestBody)
  }

  getToken(): string | null {
    if (!this.token) {

      this.token = localStorage.getItem('token');
    }

    return this.token;
  }

  setToken(token: string): void {
    this.token = token;

    localStorage.setItem('token', token);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    this.token = null;

    localStorage.removeItem('token');
  }


}