import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookListComponent } from "./book-list/book-list.component";
import { BookDetailsComponent } from "./book-details/book-details.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/books"
  },
  {
    path: "books",
    component: BookListComponent
  },
  {
    path: "books/:isbn",
    component: BookDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
