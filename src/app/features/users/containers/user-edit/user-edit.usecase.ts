import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { UserRepository } from '../../../../gateways/repositories/user.repository';
import { User } from '../../../../domain/user';
import { UserApi } from '../../../../infrastructures/api/user.api';

export interface UserEditState {
  user: User | null;
}

@Injectable()
export class UserEditUsecase extends ComponentStore<UserEditState> {
  constructor(private readonly _router: Router, private readonly _repo: UserRepository, private readonly _userApi: UserApi) {
    super({ user: null });
  }

  readonly user$: Observable<User | null> = this.select((state) => state.user);
  readonly saveUser = this.updater((state, user: User) => ({ ...state, user }));

  async fetchUser(userId: number): Promise<void> {
    // const user = await this._userApi.getUser(userId).toPromise();
    const user = await this._repo.fetchUser(userId).toPromise();
    this.saveUser(user);
  }

  async updateUser(user: User): Promise<void> {
    await this._repo.updateUser(user);
    this._router.navigateByUrl('/users');
    return;
  }

  cancelEdit(): void {
    this._router.navigateByUrl('/users');
  }
}
