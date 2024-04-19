import { Component } from '@angular/core';

@Component({
  selector: 'app-file-dropper',
  standalone: true,
  imports: [],
  templateUrl: './file-dropper.component.html',
  styleUrl: './file-dropper.component.scss'
})
export class FileDropperComponent {

  fileDropped(event: Event | InputEvent): void {
    console.log(typeof event, event);
  }

}
