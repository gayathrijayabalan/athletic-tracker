import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

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


import { NavbarComponent } from './navbar/navbar.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminComponent } from './src/app/admin/admin.component';
import{ AngularFirestore, AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireModule} from 'angularfire2';
import { AdminSidenavComponent } from './admin/admin-sidenav/admin-sidenav.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { FormGroup, FormArray, FormBuilder,
  Validators,ReactiveFormsModule  } from '@angular/forms';
import { AthleteComponent } from './admin/athlete/athlete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
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
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './coach/footer/footer.component';
import { AddEventsComponent } from './admin/add-events/add-events.component';

import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EventsService } from './shared/events.service';

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
    AdminComponent,
  
    AdminSidenavComponent,
    AdminDashboardComponent,
    AthleteComponent,
    FooterComponent,
    AddEventsComponent,
   
  
  

  ],
  imports: [
    BrowserModule,
   AngularFireModule.initializeApp(environment.firebaseConfig),
   AngularFirestoreModule,
   
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    CdkTableModule,
    CdkTreeModule,
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
  
    FormsModule,
    ReactiveFormsModule,
  
    
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
