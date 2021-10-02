import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/domain/user';

@Component({
  selector: 'app-ly-users',
  templateUrl: './ly-users.component.html',
  styleUrls: ['./ly-users.component.scss'],
})
export class LyUsersComponent {
  @Input() users: User[] = [];
  @Output() userUpdated = new EventEmitter<User>();

  editable = false;
  toggleButtonText = '編集モードへ';

  toggleMode(): void {
    this.editable = !this.editable;
    this.toggleButtonText = this.editable ? '編集モードを終了' : '編集モードへ';
  }

  updateUser(user: User): void {
    this.userUpdated.emit(user);
  }
}
