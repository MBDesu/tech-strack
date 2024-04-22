import { Component, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-upload-file-dropper',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './upload-file-dropper.component.html',
  styleUrl: './upload-file-dropper.component.scss'
})
export class UploadFileDropperComponent {

  @Input({ required: true }) accept = '';
  @Output() fileUploaded = new EventEmitter<File>();

  @ViewChild('fileUpload') fileUpload!: HTMLInputElement;

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.onFileChange(event.dataTransfer?.files);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onChange(event: Event): void {
    const el = event.target as HTMLInputElement;
    this.onFileChange(el.files || undefined);
  }

  onFileChange(files: FileList | undefined): void {
    // really only validating the MIME type...
    if (files?.length && this.accept.split(',').includes(files[0].type)) {
      this.fileUploaded.emit(files[0]);
    }
  }

}
