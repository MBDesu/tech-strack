import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { TipCardComponent } from '../tip-card/tip-card.component';

@Component({
  selector: 'app-help-modal',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    TipCardComponent,
  ],
  templateUrl: './help-modal.component.html',
  styleUrl: './help-modal.component.scss'
})
export class HelpModalComponent {

  protected dialogRef = inject(MatDialogRef<HelpModalComponent>);

  protected close = () => {
    this.dialogRef.close();
  };

}
