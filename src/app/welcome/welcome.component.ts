import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../account';
import { Customer } from '../customer';
import { AccountServiceService } from '../account-service.service';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

accounts: Account[]

customers: Customer[]

  constructor(private accountdata:AccountServiceService, private customerdata:CustomerServiceService, private router:Router) { }

  ngOnInit(): void {
    
    this.getAllAccounts();
    this.getAllCustomers();
    this.totalaccounts();
  }

  getAllAccounts(){
    this.accountdata.fetchAllAccounts().subscribe(
      response => {
        this.accounts = response
      }
    )
  }

  totalaccounts(){
    
    var total = 0
    this.accounts.forEach(account => {
    account.balance += total
    });
    return total  
    }
    
  getAllCustomers(){
    this.customerdata.fetchAllCustomers().subscribe(
      response => {
        this.customers = response
      }
    )
  }
}  
  

