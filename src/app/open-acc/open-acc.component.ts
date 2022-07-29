import { CustomerService } from './../services/customer.service';
import { Customer } from './../models/customer';
import { Component, OnInit } from '@angular/core';
import { Address } from '../models/address';
import { Router } from '@angular/router';
import { AccountStatus } from '../models/account-status';
import { AccountType } from '../models/account-type';
declare var $: any;
@Component({
  selector: 'app-open-acc',
  templateUrl: './open-acc.component.html',
  styleUrls: ['./open-acc.component.css']
})
export class OpenAccComponent implements OnInit {

  newAccount : Customer= new Customer();
  statusMessage: string;
  statusCode:string;
  constructor(
    private customerService: CustomerService , private router: Router) { }
  ngOnInit() {
    this.newAccount.accountStatus= AccountStatus.Pending;
    // this.newAccount.accountType= AccountType.Savings;
    this.newAccount.balance = 20000;
    
  }
 
  onSubmit(){
    this.customerService.openAcc(this.newAccount).subscribe(data => {
      if(data.statusCode === "SUCCESS"){
        this.statusCode=data.statusCode;
        this.statusMessage ="Registration Successful ,Your customer ID is "+data.custId;
        document.getElementById("openModalButton").click();
        
        
      }
      else{
        this.statusMessage=data.statusMessage;
        document.getElementById("openModalButton").click();
      }
    })


  } 
  onClick($event:any){
    this.router.navigate(['home']);
  }
}