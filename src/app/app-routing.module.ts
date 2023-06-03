import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './login/components/dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from './login/components/dashboard-user/dashboard-user.component';
import { DashboardErrorComponent } from './login/components/dashboard-error/dashboard-error.component';
import { LoginComponent } from './login/components/login/login.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full'
  },
  { 
    
    path: 'login', 
    component: LoginComponent,
  },
  { 
    
    path: 'dashboard-admin', 
    component: DashboardAdminComponent,
  },
  { 
    
    path: 'dashboard-user', 
    component: DashboardUserComponent,
  },
  { 
    
    path: 'dashboard-error', 
    component: DashboardErrorComponent,
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
