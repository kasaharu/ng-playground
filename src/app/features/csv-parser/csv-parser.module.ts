import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CsvParserRoutingModule } from './csv-parser-routing.module';
import { CsvParserPageComponent } from './pages/csv-parser/csv-parser.component';

@NgModule({
  declarations: [CsvParserPageComponent],
  imports: [CommonModule, CsvParserRoutingModule],
})
export class CsvParserModule {}
