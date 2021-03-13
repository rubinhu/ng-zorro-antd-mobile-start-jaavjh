import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ElementRef } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { NgZorroAntdMobileModule } from "ng-zorro-antd-mobile";
import { LayoutComponent } from "./layout/layout.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgZorroAntdMobileModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, HelloComponent, LayoutComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
