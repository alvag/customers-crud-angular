import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent {

  constructor(public dialogRef: MatDialogRef<ModalDeleteComponent>) {
  }

  confirm() {
    this.dialogRef.close(true);
  }

}
