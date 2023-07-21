import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from '../../interfaces/customer.interface';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent {

  form!: FormGroup;

  constructor(public dialogRef: MatDialogRef<ModalEditComponent>,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public customer: Customer) {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      id: [this.customer?.id],
      firstName: [this.customer?.firstName],
      lastName: [this.customer?.lastName],
      phone: [this.customer?.phone],
      email: [this.customer?.email],
      address: [this.customer?.address],
    });
  }

  confirm() {
    this.dialogRef.close(this.form.value);
  }
}
