import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountServiceService } from '../account-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

accounts: Account[]

  constructor(private data:AccountServiceService) { }

  ngOnInit(): void {
    this.getAllAccountsByCustomerId
  }

  getAllAccountsByCustomerId(id: number){
    this.data.getAllAccountsByCustomerId(id).subscribe(
      response => {
        this.accounts = response;
      }
    )
  }

  // getAllAccounts(){
  //   this.data.getAllAccounts().subscribe(
  //     response => {
  //       this.accounts = response
  //     }
  //   )
  // }
}
