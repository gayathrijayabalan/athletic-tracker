import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CoachserviceService } from './shared/coachservice.service';
import { AuthGuardService } from './shared/auth-guard.service';
import { AuthService }  from './shared/auth.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './coach/login/login.component';
import { DashboardComponent } from './coach/dashboard/dashboard.component';
import { HeaderComponent } from './coach/header/header.component';
import { StudentComponent } from './coach/student/student.component';
import { ScheduleComponent } from './coach/schedule/schedule.component';
import { ReportsComponent } from './coach/reports/reports.component';
import { AerobicComponent } from './coach/aerobic/aerobic.component';
import { StridesComponent } from './coach/strides/strides/strides.component';
import { StretchingComponent } from './coach/stretching/stretching/stretching.component';
import { WarmupComponent } from './coach/warmup/warmup/warmup.component';
import { StrengtheningComponent } from './coach/strengthening/strengthening/strengthening.component';
import { ConditionComponent } from './coach/condition/condition/condition.component';
import { WeatherComponent } from './coach/weather/weather.component';
import { DietComponent } from './coach/diet/diet.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';


import { StudentscheduleComponent } from './admin/studentschedule/studentschedule.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { EventsComponent } from './coach/events/events.component'; 
import { AdminSidenavComponent } from './admin/admin-sidenav/admin-sidenav.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { FormGroup, FormArray, FormBuilder,
  Validators,ReactiveFormsModule} from '@angular/forms';
 import {AngularFirestore,AngularFirestoreModule} from 'angularfire2/firestore';
 import {AngularFireModule} from 'angularfire2';
import { FirestoreSettingsToken } from '@angular/fire/firestore';
import { ForgetComponent } from './coach/forget/forget.component';
import { EditprofileComponent } from './coach/editprofile/editprofile.component';
import { AthleteComponent } from './admin/athlete/athlete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { StudentbyathleteComponent } from './coach/studentbyathlete/studentbyathlete.component';
import {  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,

  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule } from '@angular/material';
 

import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import{HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './coach/footer/footer.component';
import { ExerciseComponent } from './coach/exercise/exercise.component';
import { initializeApp } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AddEventsComponent } from './admin/add-events/add-events.component';
import { AddscheduleComponent } from './admin/addschedule/addschedule.component';
import { ViewdetailsComponent } from './admin/viewdetails/viewdetails.component';

import { StudentPerformanceComponent } from './coach/student-performance/student-performance.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MainComponent } from './coach/main/main.component';
import { ContainerComponent } from './coach/container/container.component';
import { StudentviewComponent } from './admin/studentview/studentview.component';
import { EditComponent } from './admin/edit/edit.component';



 
 
@NgModule({
   
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    StudentComponent,
    ScheduleComponent,
    ReportsComponent,
    AerobicComponent,
    StridesComponent,
    StretchingComponent,
    WarmupComponent,
    StrengtheningComponent,
    ConditionComponent,
    WeatherComponent,
    DietComponent,
    NavbarComponent,
    AdminHeaderComponent,
    EventsComponent,
    AdminSidenavComponent,
    AdminDashboardComponent,
    AthleteComponent,
    FooterComponent,
    ExerciseComponent,
    ForgetComponent,
    EditprofileComponent,
    AddEventsComponent,
    AddscheduleComponent,
    ViewdetailsComponent,
  
    StudentPerformanceComponent,
    StudentbyathleteComponent,
    StudentscheduleComponent,
    MainComponent,
    ContainerComponent,
    StudentviewComponent,
    EditComponent,

 

  ],
  imports: [
   
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    CdkTableModule,
    CdkTreeModule,
    SimpleNotificationsModule.forRoot(),
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
  
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    HttpClientModule,  
    HttpModule,
 
    SimpleNotificationsModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
  
    AngularFireModule.initializeApp(environment.firebaseConfig),

  
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [CoachserviceService,AuthGuardService, AngularFireAuth,AngularFirestore,AuthService],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
