import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersPageComponent } from './pages/users/users.component';
import { UsersComponent } from './containers/users/users.component';
import { UserListComponent } from './views/user-list/user-list.component';
import { PageTitleModule } from 'src/app/shared/page-title/page-title.module';

@NgModule({
  declarations: [UsersPageComponent, UsersComponent, UserListComponent],
  imports: [CommonModule, UsersRoutingModule, PageTitleModule],
})
export class UsersModule {}
