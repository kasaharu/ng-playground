import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StampRoutingModule } from './stamp-routing.module';
import { StampComponent } from './pages/stamp/stamp.component';


@NgModule({
  declarations: [
    StampComponent
  ],
  imports: [
    CommonModule,
    StampRoutingModule
  ]
})
export class StampModule { }
