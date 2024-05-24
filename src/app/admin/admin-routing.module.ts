import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminCauseListComponent } from './admin-home/admindashboard/admin-cause-list/admin-cause-list.component';
import { DashboardComponent } from './admin-home/admindashboard/dashboard/dashboard.component';

const routes: Routes = [
  {path:'admin',
  component: AdminComponent,
  children: [
    {path:'', component: AdminHomeComponent,
    children: [
      {path:'',redirectTo:'dashboard' , pathMatch:"full"},
      {path:'dashboard', component: DashboardComponent},
      {path:'cause', component: AdminCauseListComponent}
    ]},
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
