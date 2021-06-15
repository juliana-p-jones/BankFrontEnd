import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  constructor(private http:HttpClient) { }

  getAllAccountsByCustomerId(id: number): Observable<Account[]>{

    return this.http.get<Account[]>(`http://localhost:8080/api/v1/customers/${id}/accounts`);
  }

  getAllAccounts(): Observable<Account[]>{

    return this.http.get<Account[]>(`http://localhost:8080/api/v1/accounts`)
  }
}
