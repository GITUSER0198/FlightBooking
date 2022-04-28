import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayDataComponent } from './display-data/display-data.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LangTranslateModule } from './appModules/lang-translate/lang-translate.module';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';
import { AirlineComponent } from './airline/airline.component';
import { AirlineLoaderService } from './services/airline-loader.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AirlineDetailsComponent } from './airline/airline-details/airline-details.component';
import { PassengerDetail } from './dashboard/passenger-details/passenger-details.component';
import { AddPassengerComponent } from './dashboard/add-passenger/add-passenger.component';
import { AddAirlineComponent } from './airline/add-airline/add-airline.component';
import { EditPassengerComponent } from './dashboard/edit-passenger/edit-passenger.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { KeyFilterModule } from 'primeng';
import { ContactUsPageComponent } from './shared/footer/contact-us-page/contact-us-page.component';


export function initApp(dataLoader: AirlineLoaderService) {
  return () => dataLoader.loadAirlineData();
}
@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    DisplayDataComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    DashboardStudentComponent,
    AirlineComponent,
    AirlineDetailsComponent,
    PassengerDetail,
    AddPassengerComponent,
    AddAirlineComponent,
    EditPassengerComponent,
    ContactUsPageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    LangTranslateModule,
    ButtonModule,
    TableModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType:'danger'
    }),
  ],
  providers: [
     {provide: APP_INITIALIZER, useFactory: initApp, deps: [AirlineLoaderService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

