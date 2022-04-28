import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirlineComponent } from './airline/airline.component';
import { DashboardStudentComponent } from './dashboard-student/dashboard-student.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginComponent } from './login/login.component';
import { ContactUsPageComponent } from './shared/footer/contact-us-page/contact-us-page.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'input', component: RegisterFormComponent },
  { path: 'display', component: DisplayDataComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'dashboard-student', component: DashboardStudentComponent, canActivate: [AuthGuard] },
  {path: 'airline', component: AirlineComponent, canActivate: [AuthGuard]},
  {path:'contact-us',component:ContactUsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
