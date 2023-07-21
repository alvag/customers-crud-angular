import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { ModalEditComponent } from './components/modal-edit/modal-edit.component';
import { CustomerService } from './services/customer/customer.service';
import { Customer } from './interfaces/customer.interface';
import { filter, pipe } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'phone', 'actions'];
  dataSource: Customer[] = [];

  constructor(private dialog: MatDialog,
              private customerService: CustomerService) {
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(data => {
      this.dataSource = data;
    });
  }

  openEditModal(customer?: Customer) {
    this.dialog.open(ModalEditComponent, {
      width: '500px',
      data: customer
    }).afterClosed()
      .pipe(filter(data => !!data))
      .subscribe((data: Customer) => {
      if (!customer) {
        this.createCustomer(data);
      } else {
        this.updateCustomer(data);
      }
    });
  }

  createCustomer(customer: Customer) {
    this.customerService.createCustomer(customer).subscribe(data => {
      this.dataSource = [...this.dataSource, data];
    });
  }

  updateCustomer(customer: Customer) {
    console.log(customer)
    this.customerService.updateCustomer(customer).subscribe(() => {
      this.dataSource = this.dataSource.map(client => {
        if (client.id === customer.id) {
          return customer;
        }
        return client;
      });
    });
  }

  openDeleteModal(id: number) {
    this.dialog.open(ModalDeleteComponent, {
      width: '300px',
    }).afterClosed().subscribe((confirm: boolean) => {
      this.customerService.deleteCustomer(id).subscribe(() => {
        this.dataSource = this.dataSource.filter(client => client.id !== id);
      });
    });
  }
}
