import { Component, OnInit } from '@angular/core';
import { UserEditUsecase } from './user-edit.usecase';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
  providers: [UserEditUsecase],
})
export class UserEditComponent implements OnInit {
  constructor(private readonly _usecase: UserEditUsecase) {}
  user$ = this._usecase.user$;

  ngOnInit(): void {
    this._usecase.fetchUser(1);
  }
}
