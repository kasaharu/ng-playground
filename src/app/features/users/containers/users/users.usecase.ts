import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { User } from '../../../../domain/user';
import { UserRepository } from '../../../../gateways/repositories/user.repository';

export interface UserStore {
  users: User[] | null;
}

@Injectable()
export class UsersUsecase extends ComponentStore<UserStore> {
  constructor(private readonly _repo: UserRepository) {
    super({ users: null });
  }

  readonly users$: Observable<User[] | null> = this.select((state) => state.users);
  readonly saveUsers = this.updater((_, users: User[] | null) => ({ users }));
  readonly saveUser = this.updater((state, user: User) => {
    if (state.users === null) {
      return { users: [user] };
    }
    const users = state.users.map((u) => (u.id === user.id ? user : u));
    return { users };
  });

  async fetchUsers(): Promise<void> {
    await this._repo.fetchUsers();

    const users = await this._repo.users$.pipe(take(1)).toPromise();
    this.saveUsers(users);
  }

  async updateUser(user: User): Promise<void> {
    this.saveUser(user);
    await this._repo.updateUser(user);
  }
}
