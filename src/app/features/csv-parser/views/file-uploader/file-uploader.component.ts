import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent {
  @Output() filesAttached = new EventEmitter<FileList | null>();
  @ViewChild('csvUpload', { static: true }) csvUploadElement!: ElementRef<HTMLInputElement>;

  changeInputElement(): void {
    const files: FileList | null = this.csvUploadElement.nativeElement.files;
    this.filesAttached.emit(files);
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

    this.filesAttached.emit(files);
  }

  dragLeave(event: DragEvent) {
    console.log('dragLeave', event);
  }
}
