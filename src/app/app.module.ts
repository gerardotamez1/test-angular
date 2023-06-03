import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/components/login/login.component';
import { DashboardAdminComponent } from './login/components/dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from './login/components/dashboard-user/dashboard-user.component';
import { DashboardErrorComponent } from './login/components/dashboard-error/dashboard-error.component';
import { CardsComponent } from './login/components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardAdminComponent,
    DashboardUserComponent,
    DashboardErrorComponent,
    CardsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
