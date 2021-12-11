import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent
    ],
    imports: [
      CommonModule,
      MatDividerModule,
      MatToolbarModule,
      MatIconModule,
      FlexLayoutModule,
      MatButtonModule,
      MatMenuModule,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent
    ]
  })
  export class SharedModule { }