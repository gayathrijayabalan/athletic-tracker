import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './coach/dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminSidenavComponent } from './admin/admin-sidenav/admin-sidenav.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ConditionComponent } from './coach/condition/condition/condition.component';
import { LoginComponent } from './coach/login/login.component';
import { AthleteComponent } from './admin/athlete/athlete.component';
const routes: Routes = [
 {path:'dashboard',component:DashboardComponent},
 {path:'navbar',component:NavbarComponent},
 {path:'admin-header',component:AdminHeaderComponent},
 {path:'admin-sidenav',component:AdminSidenavComponent},
 {path:'admin-dashboard',component:AdminDashboardComponent},
 {path:'condition',component:ConditionComponent},
 {path:'login',component:LoginComponent},
 {path:'athlete',component:AthleteComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
