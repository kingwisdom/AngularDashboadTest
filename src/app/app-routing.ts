import { NgModule } from '@angular/core';
import {
  Routes, RouterModule
} from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{
  path:'',
  component: DefaultComponent,
  children:[
  {
    path:'dashboard',
    component: DashboardComponent
  }],
  
},
{ path: 'login', component:LoginComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}