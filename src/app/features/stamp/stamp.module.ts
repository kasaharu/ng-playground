import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StampRoutingModule } from './stamp-routing.module';
import { StampPageComponent } from './pages/stamp/stamp.component';

@NgModule({
  declarations: [StampPageComponent],
  imports: [CommonModule, StampRoutingModule],
})
export class StampModule {}
