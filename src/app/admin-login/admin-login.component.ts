import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from './../services/admin.service';
import { AdminLogin } from './../models/admin-login';
import { Component } from '@angular/core';
import { Login } from '../services/loginModel';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['.././app.component.css']
})
export class AdminLoginComponent {

  adminLogin: AdminLogin = new AdminLogin();
  adminLoginForm:FormGroup;
  submitted:boolean =false;
  loginpass:Login;
  message: string;
  error: boolean;

  constructor(private adminService: AdminService, private router: Router, private spinnerService: NgxSpinnerService) { }

  loginCheck() {
    this.router.navigate(['admin-dashboard']);
    this.spinnerService.show();
    this.adminService.login(this.adminLogin).subscribe(response => {
      if (response.statusCode === "SUCCESS") {
        sessionStorage.setItem('adminId', String(response.adminId));
        sessionStorage.setItem('adminName', response.name);
        this.spinnerService.hide();  
        this.router.navigate(['admin-dashboard']);
      }
      else {
        this.spinnerService.hide();  
        this.error = true;
        this.message = response.statusMessage;
      }
    })
  }

  onSubmit(){
   
    
    let id:string=this.adminLoginForm.controls.adminId.value;
    this.adminService.getAdminById(id).subscribe(data => 
      {

        this.loginpass = data;   
      
        if (this.adminLoginForm.controls.adminPassword.value == this.loginpass.loginPassword) {
          
          this.router.navigate(['account-requests']);
        }
        else {
          this.submitted=false;
        }
  
    });
  
  }
}
