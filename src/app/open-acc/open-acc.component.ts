import { CustomerService } from './../services/customer.service';
import { Customer } from './../models/customer';
import { Component, OnInit } from '@angular/core';
import { Address } from '../models/address';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-open-acc',
  templateUrl: './open-acc.component.html',
  styleUrls: ['./open-acc.component.css']
})
export class OpenAccComponent  {

  customer : Customer;
  aadharPic: any;
  panPic: any;
  newAccount : Customer= new Customer();
  statusMessage: string;
  statusCode:string;
  constructor(
    private customerService: CustomerService , private router: Router) { }

  onSubmit(){
    this.customerService.openAcc(this.newAccount).subscribe(data => {
      if(data.statusCode === "SUCCESS"){
        this.statusCode=data.statusCode;
        this.statusMessage ="Registration Successful ,Service Reference Number is "+data.serviceRefNo;
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
  onFileChange(event) {
    if(event.target.name=="aadhar")
    this.aadharPic = event.target.files[0];
    else if(event.target.name=="panPic")
    this.panPic = event.target.files[0];

  }

  upload() {

    let formData: FormData = new FormData();
    formData.append('aadharPic', this.aadharPic);
    formData.append('panPic', this.panPic);
    this.customerService.picUpload(formData).subscribe(response => {
    
    });
  }
}