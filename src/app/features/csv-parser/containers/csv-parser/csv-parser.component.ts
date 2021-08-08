import { Component, ElementRef, ViewChild } from '@angular/core';

const CSV_MIME_TYPE = 'text/csv';

@Component({
  selector: 'app-csv-parser',
  templateUrl: './csv-parser.component.html',
  styleUrls: ['./csv-parser.component.scss'],
})
export class CsvParserComponent {
  @ViewChild('csvUpload', { static: true }) csvUploadElement!: ElementRef<HTMLInputElement>;

  isAttachedCsvFile(): boolean {
    const files: FileList | null = this.csvUploadElement.nativeElement.files;
    if (files !== null && files[0].type === CSV_MIME_TYPE) {
      return true;
    }

    return false;
  }

  parse(): void {
    const files: FileList | null = this.csvUploadElement.nativeElement.files;
    if (files === null || files.length === 0) {
      return;
    }

    const file: File | null = files.item(0);
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

  dragOver(event: DragEvent) {
    event.preventDefault();
  }

  drop(event: DragEvent) {
    event.preventDefault();
    const files: FileList | null = event.dataTransfer ? event.dataTransfer.files : null;

    if (files === null || files.length === 0) {
      return;
    }
    this.csvUploadElement.nativeElement.files = files;
  }

  dragLeave(event: DragEvent) {
    console.log('dragLeave', event);
  }
}
