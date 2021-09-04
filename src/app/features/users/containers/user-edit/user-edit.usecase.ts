import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { User } from '../../../../domain/user';
import { UserApi } from '../../../../infrastructures/api/user.api';

export interface UserEditState {
  user: User | null;
}

@Injectable()
export class UserEditUsecase extends ComponentStore<UserEditState> {
  constructor(private readonly _userApi: UserApi) {
    super({ user: null });
  }

  readonly user$: Observable<User | null> = this.select((state) => state.user);
  readonly saveUser = this.updater((state, user: User) => ({ ...state, user }));

  async fetchUser(userId: number): Promise<void> {
    const user = await this._userApi.getUser(userId).toPromise();
    this.saveUser(user);
  }
}
