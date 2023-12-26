import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/shared/login/login.component';
import { LogoutComponent } from './modules/shared/logout/logout.component';
import { AdminHomeComponent } from './modules/admin/admin-home/admin-home.component';
import { LearnerHomeComponent } from './modules/learner/learner-home/learner-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    AdminHomeComponent,
    LearnerHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
