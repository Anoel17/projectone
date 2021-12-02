import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RequestComponent } from './request/request.component';
import { LoginComponent } from './users/login/login.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestListPendingComponent } from './request/request-list/request-list-pending/request-list-pending.component';
import { HomeEmployeeComponent } from './home/home-employee/home-employee.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { HomeManagerComponent } from './home/home-manager/home-manager.component';
import { EmployeeComponent } from './users/employee/employee.component';
import { RequestManageComponent } from './request/request-manage/request-manage.component';
const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'requests', component: RequestComponent},
  {path: 'request-view', component: RequestListComponent},
  {path: 'request-pending', component: RequestListPendingComponent},
  {path: 'employee-home', component: HomeEmployeeComponent},
  {path: 'user-details', component: UserDetailsComponent},
  {path: 'manager-home', component: HomeManagerComponent},
  {path: 'view-employees', component: EmployeeComponent},
  {path: 'request-manage', component: RequestManageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
