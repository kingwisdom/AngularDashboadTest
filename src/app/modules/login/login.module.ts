import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";
import { LoginComponent } from "./login.component";



export const routes = [
    { path: '', component: LoginComponent, pathMatch: 'full' }
  ];
  @NgModule({
    imports: [
      FormsModule,
      RouterModule.forChild(routes),
    ],
    entryComponents: [ LoginComponent ],
    declarations: [
      LoginComponent,
    ]
  })
  
  export class LoginModule { }