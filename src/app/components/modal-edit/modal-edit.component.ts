import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent {

  form!: FormGroup;

  constructor(public dialogRef: MatDialogRef<ModalEditComponent>,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public client: any) {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      firstname: [this.client.firstname],
      lastname: [this.client.lastname],
      phone: [this.client.phone],
      email: [this.client.email],
    });
  }

  confirm() {
    this.dialogRef.close(this.form.value);
  }
}
