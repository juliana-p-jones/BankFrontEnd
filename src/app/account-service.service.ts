import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  constructor(private http:HttpClient) { }


  fetchAllAccounts(): Observable<Account[]>{

    return this.http.get<Account[]>(`http://localhost:8080/api/v1/account`);
  }
}
