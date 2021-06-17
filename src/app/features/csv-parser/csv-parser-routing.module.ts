import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsvParserPageComponent } from './pages/csv-parser/csv-parser.component';

const routes: Routes = [{ path: '', component: CsvParserPageComponent, pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsvParserRoutingModule {}
