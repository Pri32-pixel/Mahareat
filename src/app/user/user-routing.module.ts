import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { HomeComponent } from './user-home/home/home.component';
import { AboutMaharetaComponent } from './user-home/about-mahareta/about-mahareta.component';
import { CauseListNewComponent } from './user-home/top-nav/cause-list-new/cause-list-new.component';
import { CircularNoticeNewComponent } from './user-home/top-nav/circular-notice-new/circular-notice-new.component';
import { AboutCpComponent } from './user-home/about-cp/about-cp.component';
import { FormerCpComponent } from './user-home/former-cp/former-cp.component';
import { KeyofficialComponent } from './user-home/keyofficial/keyofficial.component';
import { OrganizalChartComponent } from './user-home/organizal-chart/organizal-chart.component';
import { ActsComponent } from './user-home/acts/acts.component';
import { RulesComponent } from './user-home/rules/rules.component';
import { RegulationsComponent } from './user-home/regulations/regulations.component';
import { JudgementTribunalComponent } from './user-home/judgement-tribunal/judgement-tribunal.component';
import { KeyJudgementComponent } from './user-home/key-judgement/key-judgement.component';
import { NotableJudgementComponent } from './user-home/notable-judgement/notable-judgement.component';
import { AboutNewComponent } from './user-home/top-nav/about-new/about-new.component';

const routes: Routes = [
  
  {path:'',
  component: UserComponent,
  children: [
    {path:'', component: UserHomeComponent, 
    children: [
      {path:'',redirectTo:'home' , pathMatch:"full"},
      {path:'home', component: HomeComponent},
      {path:'about/aboutmahreat', component: AboutMaharetaComponent},
      {path:'about/chairperson', component: AboutCpComponent},
      {path:'about/former', component: FormerCpComponent},
      {path:'about/keyofficial', component: KeyofficialComponent},
      {path:'about/organizal', component: OrganizalChartComponent},
      {path:'cause', component: CauseListNewComponent},
      {path:'notice', component: CircularNoticeNewComponent},
      {path:'resources/acts', component: ActsComponent},
      {path:'resources/rules', component: RulesComponent},
      {path:'resources/regulations', component: RegulationsComponent},
      {path:'judgements/tribunal', component: JudgementTribunalComponent},
      {path:'judgements/key', component: KeyJudgementComponent},
      {path:'judgements/notable', component: NotableJudgementComponent}
    ]}
  ]
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
