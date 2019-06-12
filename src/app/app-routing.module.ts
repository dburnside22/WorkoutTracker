import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HistoryComponent } from './history/history.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'home', component: LandingPageComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'calendar', component: CalendarViewComponent },
    { path: 'register', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
