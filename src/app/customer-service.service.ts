import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Customer } from './customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http: HttpClient) { }
/// add a customer to database
  // tslint:disable-next-line:typedef
  addCustomer(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>('`http://localhost:8080/api/v1/customer/', customer);
  }
  deleteCustomer(id: number): Observable<Customer>{
    return this.http.delete<any>(`http://localhost:8080/api/v1/customer/${id}`);
  }
  editCustomer(id: number, customer: Customer): Observable<Customer>{
    return this.http.put<Customer>(`http://localhost:8080/api/v1/customer/${id}`, customer);
  }
  getCustomerById(id: number): Observable<Customer>{
    return this.http.get<Customer>(`http://localhost:8080/api/v1/customer/${id}`);
  }

  fetchAllCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(`http://localhost:8080/api/v1/customer/`);
  }

  fetchAllCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(`http://localhost:8080/api/v1/customer`)
  }

}
