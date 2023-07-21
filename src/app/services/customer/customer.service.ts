import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Customer } from '../../interfaces/customer.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private endpoint = `${environment.apiUrl}/customer`;

  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get<Customer[]>(this.endpoint);
  }

  getCustomer(id: number) {
    return this.http.get<Customer>(`${this.endpoint}/${id}`);
  }

  createCustomer(customer: Customer) {
    return this.http.post<Customer>(this.endpoint, customer);
  }

  updateCustomer(customer: Customer) {
    return this.http.put<Customer>(this.endpoint, customer);
  }

  deleteCustomer(id: number) {
    return this.http.delete<boolean>(`${this.endpoint}/${id}`);
  }
}
