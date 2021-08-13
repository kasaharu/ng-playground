import { Component, OnInit } from '@angular/core';
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
  editable = false;
  toggleButtonText = '編集モードへ';

  ngOnInit() {
    this._usecase.fetchUsers();
  }

  toggleMode(): void {
    this.editable = !this.editable;
    this.toggleButtonText = this.editable ? '編集モードを終了' : '編集モードへ';
  }
}
