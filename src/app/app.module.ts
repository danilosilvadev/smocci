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
import { PublishPageComponent } from "../pages/publish-page/publish-page.component";
import { CreateComicComponent } from "../components/forms/create-comic/create-comic.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MenuComponent,
    HomePageComponent,
    ComicsListComponent,
    ComicPageComponent,
    PublishPageComponent,
    CreateComicComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
