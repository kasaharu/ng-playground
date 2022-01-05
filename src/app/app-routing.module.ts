import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', loadChildren: () => import('./features/users/users.module').then((m) => m.UsersModule) },
  { path: 'csv-parser', loadChildren: () => import('./features/csv-parser/csv-parser.module').then((m) => m.CsvParserModule) },
  { path: 'stamp', loadChildren: () => import('./features/stamp/stamp.module').then((m) => m.StampModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
