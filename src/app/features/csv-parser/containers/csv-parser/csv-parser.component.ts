import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// const CSV_MIME_TYPE = 'text/csv';

@Component({
  selector: 'app-csv-parser',
  templateUrl: './csv-parser.component.html',
  styleUrls: ['./csv-parser.component.scss'],
})
export class CsvParserComponent {
  isAttachedInvalidFile$ = new BehaviorSubject<boolean>(false);
  isParsable = false;

  isAttachedCsvFile(): boolean {
    // const files: FileList | null = this.csvUploadElement.nativeElement.files;
    // if (files !== null && files[0].type === CSV_MIME_TYPE) {
    //   return true;
    // }

    return false;
  }

  parse(): void {
    // const files: FileList | null = this.csvUploadElement.nativeElement.files;
    // if (files === null || files.length === 0) {
    //   return;
    // }
    // const file: File | null = files.item(0);
    // if (file === null) {
    //   return;
    // }
    // const reader: FileReader = new FileReader();
    // reader.readAsText(file);
    // reader.onload = () => {
    //   let csv = reader.result as string;
    //   console.log(csv);
    // };
  }
}
