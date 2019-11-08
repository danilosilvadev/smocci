import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginPageComponent } from "../pages/login-page/login-page.component";
import { MenuComponent } from "../components/menu/menu.component";
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { ComicsListComponent } from "../components/comics-list/comics-list.component";
import { ComicPageComponent } from "../pages/comic-page/comic-page.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MenuComponent,
    HomePageComponent,
    ComicsListComponent,
    ComicPageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
