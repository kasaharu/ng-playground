import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PageTitleModule } from '../../shared/page-title/page-title.module';
import { UsersComponent } from './containers/users/users.component';
import { UsersPageComponent } from './pages/users/users.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserEditorFormComponent } from './views/user-editor-form/user-editor-form.component';
import { UserListEditorComponent } from './views/user-list-editor/user-list-editor.component';
import { UserListComponent } from './views/user-list/user-list.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';

@NgModule({
  declarations: [UsersPageComponent, UsersComponent, UserListComponent, UserListEditorComponent, UserEditorFormComponent, UserEditComponent],
  imports: [CommonModule, ReactiveFormsModule, UsersRoutingModule, PageTitleModule],
})
export class UsersModule {}
