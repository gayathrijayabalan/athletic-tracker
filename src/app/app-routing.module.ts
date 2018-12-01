import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './coach/dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { LoginComponent } from './coach/login/login.component';
import { StudentComponent } from './coach/student/student.component';

const routes: Routes = [
 {path:'dashboard',component:DashboardComponent},
 {path:'navbar',component:NavbarComponent},
 {path:'admin-header',component:AdminHeaderComponent},
 {path:'login',component:LoginComponent},
 {path:'student',component:StudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
