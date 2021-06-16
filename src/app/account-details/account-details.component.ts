import { Component, OnInit } from '@angular/core';
import {Withdrawals} from '../withdrawal';
import {Deposits} from '../deposit';
import {Account} from '../account';



@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  accounts: Account[];
  withdrawals: Withdrawals[];
  deposits: Deposits[];

  constructor() { }

  ngOnInit(): void {
  }

}
