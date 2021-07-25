import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { User } from '../../../../domain/user';

export interface UserStore {
  users: User[] | null;
}

@Injectable()
export class UsersUsecase extends ComponentStore<UserStore> {
  constructor() {
    super({ users: null });
  }
}
