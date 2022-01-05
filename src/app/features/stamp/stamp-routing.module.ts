import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StampPageComponent } from './pages/stamp/stamp.component';

const routes: Routes = [{ path: '', component: StampPageComponent, pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StampRoutingModule {}
