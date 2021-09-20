import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../domain/user';

@Injectable({
  providedIn: 'root',
})
export class UserApi {
  constructor(private readonly _http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>('/users');
  }

  getUser(userId: number): Observable<User> {
    return this._http.get<User>(`/users/${userId}`);
  }

  patchUser(user: User): Observable<User> {
    return this._http.patch<User>(`/users/${user.id}`, user);
  }
}
