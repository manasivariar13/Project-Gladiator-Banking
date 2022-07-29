import { UserProfileStatus } from './../models/user-profile-status';
import { UserProfileService } from '../services/user-profile.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userId: number;
  userProfileStatus: UserProfileStatus = new UserProfileStatus();
  message: string;
  error: boolean;
  newAccount : Customer= new Customer();

  constructor(private router: Router, private userProfileService: UserProfileService) { }

  ngOnInit(): void {
    this.userId = parseInt(sessionStorage.getItem('userId'));
    // this.newAccount.netBankingRequirement="N";
    // this.newAccount.debitCardRequirement="N";
    // this.newAccount.isApproved="W";
    this.userProfileService.showUserProfile(this.userId).subscribe(response => {
      if (response.statusCode === "SUCCESS")
        this.userProfileStatus.customer = response.customer;
      else {
        this.error = true;
        this.message = response.statusMessage;
      }
    })
  }

  updateProfile(): void {
    // localStorage.removeItem("editContactId")
    // localStorage.setItem("editContactId", contact.id.toString())
    // this.router.navigate(['account-summary'])
    document.getElementById("openModalButton").click();
  }

  onSubmit(){
    // document.getElementById("openModalButton").click();
    // this.customerService.openAcc(this.newAccount).subscribe(data => {
    //   if(data.statusCode === "SUCCESS"){
    //     this.statusCode=data.statusCode;
    //     this.statusMessage ="Registration Successful ,Service Reference Number is "+data.serviceRefNo;
    //     document.getElementById("openModalButton").click();
        
        
    //   }
    //   else{
    //     this.statusMessage=data.statusMessage;
    //     document.getElementById("openModalButton").click();
    //   }
    // })


  } 

}
