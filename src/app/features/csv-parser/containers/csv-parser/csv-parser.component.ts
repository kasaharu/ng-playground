import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-csv-parser',
  templateUrl: './csv-parser.component.html',
  styleUrls: ['./csv-parser.component.scss'],
})
export class CsvParserComponent {
  @ViewChild('csvUpload') csvUploadElement!: ElementRef<HTMLInputElement>;

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
}
