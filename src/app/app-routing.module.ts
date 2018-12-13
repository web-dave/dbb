import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InfoBoxComponent } from "./info-box/info-box.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/books"
  },
  {
    path: "info",
    component: InfoBoxComponent
  },
  { path: "books", loadChildren: "./book/book.module#BookModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
