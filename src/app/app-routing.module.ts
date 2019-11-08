import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { LoginPageComponent } from "../pages/login-page/login-page.component";
import { ComicPageComponent } from "../pages/comic-page/comic-page.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "home", component: HomePageComponent, data: { title: "List" } },
  { path: "comic", component: ComicPageComponent },
  { path: "login", component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
