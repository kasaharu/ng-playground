import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent {
  @ViewChild('csvUpload', { static: true }) csvUploadElement!: ElementRef<HTMLInputElement>;

  changeInputElement(): void {}

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
