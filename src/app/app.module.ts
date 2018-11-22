import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { EventsComponent } from './coach/events/events.component';

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
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
