import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { LoginPageComponent } from "../pages/login-page/login-page.component";
import { ComicPageComponent } from "../pages/comic-page/comic-page.component";
import { PublishPageComponent } from "../pages/publish-page/publish-page.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "comics",
    component: HomePageComponent,
    data: { title: "Lista de quadrinhos" }
  },
  { path: "comic", component: ComicPageComponent },
  { path: "publish", component: PublishPageComponent },
  { path: "login", component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
