import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  // username: string;
  hide: any;

  customer = new Customer();

  constructor(private data: CustomerServiceService) { }

  signupButton(){
    this.data.addCustomer(this.customer).subscribe
  }

  ngOnInit(): void {
  }

}
