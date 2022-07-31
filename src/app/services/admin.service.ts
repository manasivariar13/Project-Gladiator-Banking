import { AdminSearchCustomerStatus } from './../models/admin-search-customer-status';
import { Status } from './../models/status';
import { CustomerRequestStatus } from './../models/customer-request-status';
import { AdminStatus } from '../models/admin-status';
import { AdminLogin } from '../models/admin-login';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminApproval } from '../models/admin-approval';
import {Login} from './loginModel';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  login(adminLogin: AdminLogin): Observable<AdminStatus>{
    let url = "http://localhost:9090/admin/adminLogin";
    let res=  this.http.post<any>(url, adminLogin);
    console.log(res);
    return res;
  }

  getAdminById(adminId:string) {
    return this.http.post<Login>("http://localhost:9090/admin/adminid",adminId);
  }
 

  showPendingRequests(): Observable<CustomerRequestStatus>{
    let url = "http://localhost:9090/pending-requests";
    return this.http.get<CustomerRequestStatus>(url);
  }

  approve(adminApproval: AdminApproval): Observable<Status>{
    let url = "http://localhost:9090/approve";
    return this.http.put<Status>(url, adminApproval);
  }

  searchCustomerByServRefNo(serviceReferenceNumber: number): Observable<AdminSearchCustomerStatus>{
    return this.http.get<AdminSearchCustomerStatus>("http://localhost:9090/search-customer?serviceReferenceNumber="+serviceReferenceNumber);
  }
}
