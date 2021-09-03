import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEditPageComponent } from './pages/user-edit/user-edit.component';
import { UsersPageComponent } from './pages/users/users.component';

const routes: Routes = [
  { path: '', component: UsersPageComponent, pathMatch: 'full' },
  { path: ':userId/edit', component: UserEditPageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
