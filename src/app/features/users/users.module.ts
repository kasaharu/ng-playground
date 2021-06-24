import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersPageComponent } from './pages/users/users.component';
import { UsersComponent } from './containers/users/users.component';
import { UserListComponent } from './views/user-list/user-list.component';

@NgModule({
  declarations: [UsersPageComponent, UsersComponent, UserListComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
