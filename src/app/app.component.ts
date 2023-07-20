import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { ModalEditComponent } from './components/modal-edit/modal-edit.component';

export interface Client {
  id: number;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email', 'phone', 'actions'];
  dataSource: Client[] = [
    {id: 1, firstname: 'Max', lastname: 'Alva', phone: '123456', email: 'test@email.com'},
  ];

  constructor(private dialog: MatDialog) {
  }

  openEditModal(client: Client) {
    this.dialog.open(ModalEditComponent, {
      width: '500px',
      data: client
    }).afterClosed().subscribe((data: Client) => {
      console.log(data)
    });
  }

  openDeleteModal(id: number) {
    this.dialog.open(ModalDeleteComponent, {
      width: '300px',
    }).afterClosed().subscribe((confirm: boolean) => {
      console.log(confirm)
    });
  }
}
