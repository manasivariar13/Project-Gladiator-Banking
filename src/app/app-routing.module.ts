import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FundTransferStatusComponent } from './fund-transfer-status/fund-transfer-status.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { ViewBeneficiaryComponent } from './view-beneficiary/view-beneficiary.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { RegisterIbComponent } from './register-ib/register-ib.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotUserIdComponent } from './forgot-user-id/forgot-user-id.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SessionExpiredComponent } from './session-expired/session-expired.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { OpenAccComponent } from './open-acc/open-acc.component';
import { TrackApplicationComponent } from './track-application/track-application.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EnterOtpComponent } from './enter-otp/enter-otp.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ForgotPasswordOtpComponent } from './forgot-password-otp/forgot-password-otp.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'session-expired', component: SessionExpiredComponent },
  { path: 'forgot-user-id', component: ForgotUserIdComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'set-new-password', component: SetNewPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'account-summary', component: AccountSummaryComponent },
  { path: 'account-statement', component: AccountStatementComponent },
  { path: 'register-ib', component: RegisterIbComponent },
  { path: 'open-acc', component: OpenAccComponent },
  { path: 'track-application', component: TrackApplicationComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'add-beneficiary', component: AddBeneficiaryComponent },
  { path: 'view-beneficiary', component: ViewBeneficiaryComponent },
  { path: 'enter-otp', component: EnterOtpComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'fund-transfer', component: FundTransferComponent },
  { path: 'fund-transfer-status', component: FundTransferStatusComponent },
  { path: 'forgot-password-otp', component: ForgotPasswordOtpComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
