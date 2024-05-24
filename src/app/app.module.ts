import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { UserRoutingModule } from './user/user-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { HeaderComponent } from './user/user-home/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopNavComponent } from './user/user-home/top-nav/top-nav.component';
import { AboutNewComponent } from './user/user-home/top-nav/about-new/about-new.component';
import { CauseListNewComponent } from './user/user-home/top-nav/cause-list-new/cause-list-new.component';
import { CircularNoticeNewComponent } from './user/user-home/top-nav/circular-notice-new/circular-notice-new.component';
import { AboutCpComponent } from './user/user-home/about-cp/about-cp.component';
import { AboutMaharetaComponent } from './user/user-home/about-mahareta/about-mahareta.component';
import { ActsComponent } from './user/user-home/acts/acts.component';
import { FormerCpComponent } from './user/user-home/former-cp/former-cp.component';
import { RulesComponent } from './user/user-home/rules/rules.component';
import { RegulationsComponent } from './user/user-home/regulations/regulations.component';
import { OrganizalChartComponent } from './user/user-home/organizal-chart/organizal-chart.component';
import { NotableJudgementComponent } from './user/user-home/notable-judgement/notable-judgement.component';
import { KeyofficialComponent } from './user/user-home/keyofficial/keyofficial.component';
import { KeyJudgementComponent } from './user/user-home/key-judgement/key-judgement.component';
import { JudgementTribunalComponent } from './user/user-home/judgement-tribunal/judgement-tribunal.component';
import { HomeComponent } from './user/user-home/home/home.component';
import { LoginComponent } from './admin/admin-home/login/login.component';
import { AdmindashboardComponent } from './admin/admin-home/admindashboard/admindashboard.component';
import { AdminCauseListComponent } from './admin/admin-home/admindashboard/admin-cause-list/admin-cause-list.component';
import { Member1PopupComponent } from './user/user-home/about-cp/member1-popup/member1-popup.component';
import { Member2PopupComponent } from './user/user-home/about-cp/member2-popup/member2-popup.component';
import { ChairpersonComponent } from './user/user-home/former-cp/chairperson/chairperson.component';
import { FormerMember1Component } from './user/user-home/former-cp/former-member1/former-member1.component';
import { FormerMember2Component } from './user/user-home/former-cp/former-member2/former-member2.component';
import { DashboardComponent } from './admin/admin-home/admindashboard/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { AuthInterceptorInterceptor } from './auth-interceptor.interceptor';
import { AdminHeaderComponent } from './admin/admin-home/admindashboard/admin-header/admin-header.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    AdminHomeComponent,
    UserHomeComponent,
    HeaderComponent,
    FooterComponent,
    TopNavComponent,
    AboutNewComponent,
    CauseListNewComponent,
    CircularNoticeNewComponent,
    AboutCpComponent,
    AboutMaharetaComponent,
    ActsComponent,
    FormerCpComponent,
    RulesComponent,
    RegulationsComponent,
    OrganizalChartComponent,
    NotableJudgementComponent,
    KeyofficialComponent,
    KeyJudgementComponent,
    JudgementTribunalComponent,
    HomeComponent,
    LoginComponent,
    AdmindashboardComponent,
    AdminCauseListComponent,
    Member1PopupComponent,
    Member2PopupComponent,
    ChairpersonComponent,
    FormerMember1Component,
    FormerMember2Component,
    DashboardComponent,
    AdminHeaderComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule,
    AppRoutingModule,
    UserRoutingModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatListModule,
    MatSidenavModule,
    MatListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatMenuModule,
    CommonModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptorInterceptor,
    multi:true,
  }],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
