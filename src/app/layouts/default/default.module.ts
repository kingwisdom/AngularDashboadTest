import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "src/app/modules/dashboard/dashboard.component";
import { LoginComponent } from "src/app/modules/login/login.component";
import { SharedModule } from "src/app/shared/shared.module";
import { DefaultComponent } from "./default.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule, } from '@angular/material/divider';

@NgModule({
    declarations: [
      DefaultComponent,
      DashboardComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      SharedModule,
      MatSidenavModule,
      MatDividerModule,
    ]
  })
  export class DefaultModule { }