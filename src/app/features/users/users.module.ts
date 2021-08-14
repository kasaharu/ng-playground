import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersPageComponent } from './pages/users/users.component';
import { UsersComponent } from './containers/users/users.component';
import { UserListComponent } from './views/user-list/user-list.component';
import { PageTitleModule } from 'src/app/shared/page-title/page-title.module';
import { UserListEditorComponent } from './views/user-list-editor/user-list-editor.component';
import { UserEditorFormComponent } from './views/user-editor-form/user-editor-form.component';

@NgModule({
  declarations: [UsersPageComponent, UsersComponent, UserListComponent, UserListEditorComponent, UserEditorFormComponent],
  imports: [CommonModule, UsersRoutingModule, PageTitleModule],
})
export class UsersModule {}
