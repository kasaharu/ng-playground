import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CsvParserRoutingModule } from './csv-parser-routing.module';
import { CsvParserComponent } from './pages/csv-parser/csv-parser.component';

@NgModule({
  declarations: [CsvParserComponent],
  imports: [CommonModule, CsvParserRoutingModule],
})
export class CsvParserModule {}
