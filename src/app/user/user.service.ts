import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, map, of } from 'rxjs';

import { User } from '../interfaces/user.interface';


interface PaginatedUserResponse {
  users: User[];
  results: User[];
  count: number;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiHost = 'http://127.0.0.1:8000/';
  private allUsers$: Observable<User[]> = of([]);

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {

    this.allUsers$ = this.http.get<User[]>(`${this.apiHost}users/`).pipe(
      map((response: any) => response.results)
    );
    return this.allUsers$;
  }

  getPaginatedUsers(pageIndex: number): Observable<PaginatedUserResponse> {

    const params = new HttpParams()
      .set('page', pageIndex.toString())
    // .set('size', pageSize.toString())

    return this.http.get<PaginatedUserResponse>(`${this.apiHost}users/`, { params });
  }

  getAllUsers(): Observable<User[]> {
    return this.allUsers$;
  }

  fetchAllUsers(): void {
    this.getUsers().subscribe(users => {
      this.allUsers$ = of(users);
    });
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiHost}users/`, user);
  }

}