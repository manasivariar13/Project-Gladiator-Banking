import { AccountSummaryStatus } from '../models/account-summary-status';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  showAccountSummary(accountNumber: number): Observable<AccountSummaryStatus>{
    let url="http://localhost:9090/api/accountSummary/"+accountNumber;
    return this.http.get<AccountSummaryStatus>(url);
  }
}
