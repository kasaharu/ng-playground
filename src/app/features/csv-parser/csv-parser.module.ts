import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CsvParserRoutingModule } from './csv-parser-routing.module';
import { CsvParserPageComponent } from './pages/csv-parser/csv-parser.component';
import { CsvParserComponent } from './containers/csv-parser/csv-parser.component';
import { FileUploaderComponent } from './views/file-uploader/file-uploader.component';

@NgModule({
  declarations: [CsvParserPageComponent, CsvParserComponent, FileUploaderComponent],
  imports: [CommonModule, CsvParserRoutingModule],
})
export class CsvParserModule {}
