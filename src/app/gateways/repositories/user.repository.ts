import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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

  async fetchUsers(): Promise<void> {
    if (this._users$.getValue() !== null) {
      return;
    }

    const users = await this._api.getUsers().toPromise();
    this._users$.next(users);
  }
}
