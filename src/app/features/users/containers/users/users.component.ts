import { Component, OnInit } from '@angular/core';
import { User } from '../../../../domain/user';
import { UsersUsecase } from './users.usecase';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersUsecase],
})
export class UsersComponent implements OnInit {
  constructor(private readonly _usecase: UsersUsecase) {}
  readonly users$ = this._usecase.users$;

  ngOnInit() {
    this._usecase.fetchUsers();
  }

  updateUser(user: User): void {
    this._usecase.updateUser(user);
  }
}
