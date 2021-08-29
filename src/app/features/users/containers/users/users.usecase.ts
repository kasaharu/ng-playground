import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { User } from '../../../../domain/user';
import { UserApi } from '../../../../infrastructures/api/user.api';

export interface UserStore {
  users: User[] | null;
}

@Injectable()
export class UsersUsecase extends ComponentStore<UserStore> {
  constructor(private readonly _userApi: UserApi) {
    super({ users: null });
  }

  readonly users$: Observable<User[] | null> = this.select((state) => state.users);
  readonly saveUsers = this.updater((_, users: User[]) => ({ users }));
  readonly saveUser = this.updater((state, user: User) => {
    if (state.users === null) {
      return { users: [user] };
    }
    const users = state.users.map((u) => (u.id === user.id ? user : u));
    return { users };
  });

  async fetchUsers(): Promise<void> {
    const users = await this._userApi.getUsers().toPromise();
    this.saveUsers(users);
  }

  async updateUser(user: User): Promise<void> {
    const result = await this._userApi.patchUser(user).toPromise();
    this.saveUser(result);
  }
}
