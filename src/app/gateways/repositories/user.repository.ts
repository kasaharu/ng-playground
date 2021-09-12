import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../../domain/user';
import { UserApi } from '../../infrastructures/api/user.api';

@Injectable({
  providedIn: 'root',
})
export class UserRepository {
  constructor(private readonly _api: UserApi) {}

  private _users$ = new BehaviorSubject<User[] | null>(null);
  get users$(): Observable<User[] | null> {
    return this._users$.asObservable();
  }

  fetchUsers(): void {
    if (this._users$.getValue() !== null) {
      return;
    }

    this._api.getUsers().subscribe((val) => {
      this._users$.next(val);
    });
  }
}
