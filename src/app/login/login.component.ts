import { UserLogin } from './../models/user-login';
import { UserService } from './../services/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userLogin:UserLogin = new UserLogin();
  message: string;
  error: boolean;

  constructor(private userService: UserService, private router: Router ,private SpinnerService: NgxSpinnerService) { }

  loginCheck(){
    this.SpinnerService.show();
    // this.router.navigate(['account-summary']);
    console.log(this.userLogin);
    this.userService.login(this.userLogin).subscribe(data => {
      if(data.statusCode === "SUCCESS"){
        
        sessionStorage.setItem('userId', String(data.userId));
        sessionStorage.setItem('accountNumber',data.accountNumber);
        // console.log(data.userName);
        console.log(data.userId);
        this.SpinnerService.hide();  
        this.router.navigate(['account-summary']);
      }
      else{
        this.SpinnerService.hide(); 
        this.error = true;
        this.message = data.statusMessage;
      }
    }, error => {
      this.SpinnerService.hide(); 
      this.error = true;
      this.message = error.error.statusMessage;
      console.log(error.error.statusMessage);
    })
  }
  }
