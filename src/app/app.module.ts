import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginPageComponent } from "../pages/login-page/login-page.component";
import { MenuComponent } from "../components/menu/menu.component";

@NgModule({
  declarations: [AppComponent, LoginPageComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
