import { Component } from '@angular/core';

const CSV_MIME_TYPE = 'text/csv';

@Component({
  selector: 'app-csv-parser',
  templateUrl: './csv-parser.component.html',
  styleUrls: ['./csv-parser.component.scss'],
})
export class CsvParserComponent {
  files: FileList | null = null;
  isAttachedInvalidFile = false;
  isParsable = false;

  updateFiles(files: FileList | null): void {
    this.files = files;
    this.isParsable = this.isAttachedCsvFile(files);
    this.isAttachedInvalidFile = !this.isParsable;
  }

  isAttachedCsvFile(files: FileList | null): boolean {
    if (files !== null && files[0].type === CSV_MIME_TYPE) {
      return true;
    }

    return false;
  }

  parse(): void {
    if (this.files === null || this.files.length === 0) {
      return;
    }
    const file: File | null = this.files.item(0);
    if (file === null) {
      return;
    }
    const reader: FileReader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      let csv = reader.result as string;
      console.log(csv);
    };
  }
}
